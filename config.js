const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://aliikechukwu2:suhail@cluster0.tikho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068605388";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_48_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSUZSZHhLKy9aZDBURWdVUnBPKzc1QitRN3FsVi9VQkwwWEhvQzBlNGdNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDEwMTQzMDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2ODJGOTAzRTBBMkZFQ0VGQTEwRUUwQUFDMzc1M0Q2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjIxNDkyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDEwMTQzMDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2RjhDRTE4M0Q0NTZFMTc0Qjc1QUE0OTk2NzE1MzE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjIxNDkyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDEwMTQzMDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFOEZDQkRFMDEyODEwNTlCQ0YzMzQwNDBEMDRGODc3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjIxNDkyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDEwMTQzMDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5RTYwQjA0MUMxRTQ3RjQzMDlCMzA3MTFEMzAxQTk5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjIxNDkyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvdVdIUk16N1RPLXpQQ0UyWktnOTh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlY2RkNWNhLTk1ZmEtNDhhOC1iNjkyLTNiZDQ2M2IyYWFkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxMzMsXG4gICAgICAxMDAsXG4gICAgICA3OSxcbiAgICAgIDkyLFxuICAgICAgOTUsXG4gICAgICAxNzIsXG4gICAgICAxMjAsXG4gICAgICAxMTksXG4gICAgICAxMTEsXG4gICAgICAxMDMsXG4gICAgICA2NSxcbiAgICAgIDE0OCxcbiAgICAgIDAsXG4gICAgICAyNTAsXG4gICAgICAxNzYsXG4gICAgICAyMzEsXG4gICAgICAxNTMsXG4gICAgICAyMCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAxMjksXG4gICAgICAxNjAsXG4gICAgICAyNDAsXG4gICAgICAxMTAsXG4gICAgICA4MSxcbiAgICAgIDM1LFxuICAgICAgMjM0LFxuICAgICAgMTA2LFxuICAgICAgMjAsXG4gICAgICAxMSxcbiAgICAgIDYxLFxuICAgICAgMTQxLFxuICAgICAgMTAxLFxuICAgICAgMjQwLFxuICAgICAgMTU2LFxuICAgICAgMTUsXG4gICAgICAxNDQsXG4gICAgICAxNjcsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYVV0YUVCRUllQi9ya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpJK25VdTlDbklLS1ZaYUxPK0xwMUpqVEtzLzB5Njk4QmVzMmFFNlRSQ0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMVhrNkxzYk9kQXBRaEUzN2w0VnRwVkdHL09ncTdGSUhaVUQxdzNKOWE1NG1wRm12L3BtYkRPTTBzQklLVnhyV2ljLzJxbzRnVzc2M0ovQjVGUUp1QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTNEZmZ4bFZXdUdxbUZ4YS9mZ2hxd3FTUDlVcEo1elNRU2g0QWVIaG8rTFpGd2U5K2VNVFBlR01iVmpKQ1p2V2hQbUtmUWJ2RHpINGRRMldvejZraGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxMDE0MzA1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MjYzMTM3MDQ2NzgwOjExQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMTAxNDMwNToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyMTQ5MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSDBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFIMC5qc29uIjogIntcImtleURhdGFcIjpcIjVpNHlvN2UwbytZRlFLa1lIakpRbTI2aXRwRnhzckw5ZzVrSDdxbUpyV1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzM4NTEyNDcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIyMTQ5MjQ3MzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
