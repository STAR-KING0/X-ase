const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2347039570336'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2349123721026'
global.devs = '2347039570336,2348050907760';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtDNHBwdkVSVTlsTlE0QUdFcXhoR2NtcWRDZmx0Z0Q3ZTAvRnh2K09VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmVKQW1nSk02anJJeVFnL3pWNUllWGI2N3BtSTY2MWlLMkxFRUhuVzdqcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUxNbkRCL1NQNVc1T0tJblBBTExQOURLR3ZoaGx0QlE2d1hxVms0RVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDBXcEhOWGxOdUhyRWEreDJyZHpERm4zeENpS0dqYlhDaDJES1VMaWlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDdjYzY0k4MUJUdkcwVXJ6VzBma2ZMZDk5K1JkcDJQQ1JDMGxKYTBOa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlwWm0velBWRVY2am9GYVUyUHc4dm1oK3hIM2dvemxHNnU3b04waWFvMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEc3bDI1S2ZpR1hRbXo2NmVqKzFiMk11cU42OG8wZTRPMnFJMVJHb1Jtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVpVYzN6K3JCMHdtOTdnR2F0L29TQmxSU21JTXQyMWYxMVBMWXMrSW1CUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTMUc5dExQbjA1ZDdDQm9mVmcxZitQWVRreFRUbDZTQ1pPT250MzdTTURwZnZKWThncytpY1JjU2NNSlQ0VmxSRXJOeGRCd2J3bFplS09QSTF2d0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6ImVQak9COGpWbktSWks1OXB1WFhZT2d6WlYzWHNvVXUzMGdLVm1mM3loNEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1MDkyNDg4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NzdGRDJFQjc3NDk2Rjg1RkY2NjkxNzg0M0VFNDY0MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4OTk3NDg3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTUwOTI0ODg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBOTAyOEVDMTAzMzYxMEQyQ0RFQzNFNTBDNzA2OTY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg5OTc0ODh9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA1V0xLMnY1U2htX2RLZXdKLXVFSEEiLCJwaG9uZUlkIjoiZWQ3OTU1NTMtZjdhOS00NzMyLWE2NDAtMGQ3MWFmNGJjMzU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFaYk1WaG10d3Z3QjRhNkFoTWt5ZGNsZlZTYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxNzJEMm5OSGo4eXdLK2FsMVRyVEtBZGgwcTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTczWlMzTUgiLCJtZSI6eyJpZCI6IjIzNDgxNTA5MjQ4ODc6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5nIERhdmlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWGU5ZDRHRU4vUXViZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyanIyU1ErVGVMMjZzQU5CeFZodzMzN3NNdFZES1ZzMG1vUHYra0Y5WXlvPSIsImFjY291bnRTaWduYXR1cmUiOiJUMVpaQTRnRFJCQURzRER2TjdqZlhjQ2hxbmhkWmFzQXZ5R09lSXAxRkt4c2g0TENUMGlGVlFVNGZZcjE3TTZLOHhoZmhSV2tjN0p5aXFac2dXYVdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlRCK3lmZzA4Z2FxenZGWVRGaHI3a0pkWkdXbjdCNno4V2I2OWpVRWVkdjFheWdLRll5ZmVKNWRGc254Wk8vVVRwMlNHZDRZNExCWis0Ukc4ekw4Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTUwOTI0ODg3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTQ2OWtrUGszaTl1ckFEUWNWWWNOOSs3RExWUXlsYk5KcUQ3L3BCZldNcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODk5NzQ4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGSW0ifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '#' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
