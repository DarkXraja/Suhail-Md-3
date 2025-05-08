const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location=""


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website =process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_56_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA5MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFQTmE2M2FCb2ZvbEZYSzg3Nko1R1hmNDc1SUdzYWxaVGRWTTlZbUMxT3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3Njg0OTkwODk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQUREMjU4ODc1QjlCOTM4MDJGRkNCREVCRTIxNTIxQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDY2NzY2MTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc2ODQ5OTA4OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDMzk2RDk4MDhENkFDMTJFOTQzMTAzOTlGRDUwQkREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjY3NjYxNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJSGRmVFdGWlJGbXMtcXVuRzM0aHp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2ODEyZjgwLTNhMDMtNGQxMS04ZjhlLTEwZTdhMmNmYjVlZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICA4MixcbiAgICAgIDIwOCxcbiAgICAgIDIyLFxuICAgICAgNDYsXG4gICAgICAyNDMsXG4gICAgICA1OCxcbiAgICAgIDY1LFxuICAgICAgMjI3LFxuICAgICAgMTkxLFxuICAgICAgMTQzLFxuICAgICAgMTg1LFxuICAgICAgMzksXG4gICAgICAyMTksXG4gICAgICAyMDUsXG4gICAgICA1MSxcbiAgICAgIDk3LFxuICAgICAgMjA3LFxuICAgICAgNzcsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDM5LFxuICAgICAgMTE3LFxuICAgICAgMzAsXG4gICAgICA4MSxcbiAgICAgIDY4LFxuICAgICAgMTEwLFxuICAgICAgMjAyLFxuICAgICAgNjIsXG4gICAgICAxOSxcbiAgICAgIDEzMyxcbiAgICAgIDU5LFxuICAgICAgMTA5LFxuICAgICAgNDMsXG4gICAgICAyNDIsXG4gICAgICAyNTQsXG4gICAgICAxMSxcbiAgICAgIDE2MyxcbiAgICAgIDE4MSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdLWENXRjlOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc2ODQ5OTA4OTQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3ODEwNDUwMTY5ODg0OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMeTJWMFEvdGJ3d0FZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWTA0WGFNcVNud05xQVJRY1N2V3ZrWGJYUkpFc1lFN1p0MFpGNHpoQTczND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVKzdKTEJ0bkk2dWtHdFdoVnA1U1lrKytRUUFWRWJqeE1jbXRZYXoxZUlVVUpGZEdockd5ejdhNFVGaW41bnRheUhRS1ZEdHZkd05uYTdtVGFXb0NDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGdW5LU1ViRnR3RkhhMCt1cWtnWmZQQUd6YTRjdWZkMHYyaTJ4dFU1cGxmMzNTZ1RNcllQbDROQ3FCWUc4akJYOW5JWFN2ak9TV3ZDY0EreWdNSzJodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc2ODQ5OTA4OTQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY2NzY2MDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
