// Required Libraries
const pino = require("pino");
const fs = require("fs-extra");
const path = require("path");
const express = require("express");
const Config = require("../config");
const app = express();
const prefix = Config.HANDLERS[0];
const { writeFile } = require("fs/promises");
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require("awesome-phonenumber");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif');
const { default: VoidConnect, fetchLatestBaileysVersion, makeInMemoryStore, useMultiFileAuthState, jidDecode } = require("@whiskeysockets/baileys");
const util = require("util");
const Sequelize = require("sequelize");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
const events = require("./commands");
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn');
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib');
const speedofbot = require("performance-now");
var CryptoJS = require("crypto-js");

// SQLite Database Setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './izuku.db',
});

async function IzukuConnect() {
  try {
    await sequelize.authenticate();
    console.log("🌍 Connected to the Izuku DB");
  } catch (error) {
    console.error("Unable to connect to the Izuku DB:", error);
  }
}

IzukuConnect();

// Global Variables
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
let cc = Config.sessionName.replace(/IZUKU;;;/g, "").replace(/BLACK;;;/gi, "");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');

// Session Setup
async function MakeSession() {
  if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if (cc.length < 30) {
      let { data } = await axios.get('https://paste.c-net.org/' + cc);
      await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8");
    } else {
      var c = atob(cc);
      await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', c, "utf8");
    }
  }
}

MakeSession();

// Event Handling
setTimeout(() => {
  const moment = require('moment-timezone');
  async function main() {
    if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {}
  }
  main();

  const store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });

  require("events").EventEmitter.defaultMaxListeners = 600;

  const getVersionWaweb = () => {
    let version;
    try {
      let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web');
      version = [a.currentVersion.replace(/[.]/g, ', ')];
    } catch {
      version = [2, 2204, 13];
    }
    return version;
  };

  let QR_GENERATE = "invalid";

  async function syncdb() {
    let thumbbuffer = await getBuffer(THUMB_IMAGE);
    const ChangePic = __dirname + "/assets/SocialLogo.png";
    await writeFile(ChangePic, thumbbuffer);
    global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png");

    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/');
    const Void = VoidConnect({
      logger: pino({ level: 'fatal' }),
      printQRInTerminal: true,
      browser: ['Izuku', 'safari', '1.0.0'],
      fireInitQueries: false,
      shouldSyncHistoryMessage: false,
      downloadHistory: false,
      syncFullHistory: false,
      generateHighQualityLinkPreview: true,
      auth: state,
      version: getVersionWaweb() || [2, 2242, 6],
      getMessage: async key => {
        if (store) {
          const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
          return msg.message || undefined;
        }
        return { conversation: 'An Error Occurred, Repeat Command!' };
      }
    });

    store.bind(Void.ev);

    setInterval(() => {
      store.writeToFile(__dirname + "/store.json");
    }, 30 * 1000);

    // Call Handling
    Void.ev.on("call", async (c) => {
      c = c.map(c => c);
      c = c[0];
      let { status, from, id } = c;

      if (status === "offer") {
        if (Config.anticall === 'true') {
          await Void.rejectCall(id, from);
          
          const fancyText = 'My owner can\'t take calls right now.';
          const borderedText = `╔═══════════════╗\n║ ${fancyText} ║\n╚═══════════════╝`;

          let buttonMessage = {
            image: { url: await botpic() },
            caption: borderedText,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "IZUKU-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 4,
                mediaUrl: '',
                sourceUrl: ``,
              },
            },
          };

          return await Void.sendMessage(from, buttonMessage, {
            quoted: c,
          });
        }
      }
    });

    // Message Handling
    Void.ev.on('messages.upsert', async ({ messages }) => {
      for (const message of messages) {
        try {
          if (!message.message) continue;

          const messageContent = message.message.conversation || message.message.extendedTextMessage?.text;

          if (messageContent && (messageContent.includes('pls send') || messageContent.includes('Send'))) {
            const quotedMessage = message.message.extendedTextMessage?.contextInfo?.quotedMessage;

            if (quotedMessage) {
              let cap = '';

              if (quotedMessage.videoMessage) {
                cap = quotedMessage.videoMessage.caption || '';
                const media = await Void.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
                await Void.sendMessage(message.key.remoteJid, { video: { url: media }, caption: cap }, { quoted: message });
              }
            }
          }
        } catch (error) {
          console.error('Error processing message:', error, message);
        }
      }
    });

    // Auto Read Status Messages
    Void.ev.on('messages.upsert', async chatUpdate => {
      const mek = chatUpdate.messages[0];
      if (!mek.message) return;
      if (mek.message.viewOnceMessageV2) return;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === 'status@broadcast' && Config.auto_read_status === 'true') {
        await Void.readMessages([mek.key]);
      }
    });
  }

  syncdb();
}, 0);
