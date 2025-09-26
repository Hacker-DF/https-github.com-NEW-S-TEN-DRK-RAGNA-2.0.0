//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://postimg.cc/MMCxm6dS";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "22870558041";
global.style = process.env.STYLE || "2";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "trur";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://postimg.cc/MMCxm6dS"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/";
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09FQUt3Ny8wYmE2WnBTUG5CeDllTTBsdmhQRmJMWmR2UWRtdDBMQngwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjNVZytYZHFwSHJrNUlxeVZHUVJ2WTIrU1pqSTl3R0lCZ1BuVCtHbXAyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R3VXQlgrNEpLYTE1b0d3SHhuTGx0dUFML2YzNTJmSU11RWtXVENmR2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNXB3THM2aHM2Z1FHcm5EbEVzb0Fma3RURnpaamZQUVdFS3lXQzBmeG5NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBZy9Ud0xIUWZacnZ5S0hvTWlCZC9aTi8raDdCRTFOaEJLdXVRbDZVMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBVMjBIa0ZnNERFSTRPWFdkZ25uOEMzSlU5SnhUODVYUStiWk9XRjhJRE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlmWXlLQlVSVVFyRkJ6VTJkc2RDRDMzMzZ0cktjYTNyU3duQ3BiWjJIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzBrK3o1ZFgveTJ6bU9yaWZVVWFHTEZJSHJhUVdCanZkdjVJdnU3MUxVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9KWlRLWk1wRE11VWhrUFhxOWF6NENkbzBBNHRVK3FrVERVdVY4d2M3MFRXZ3QyV3JCeDJ1Qkp3OXloK3VuVUhNcGlBdys1bHBpWE05a3hzWGYxdERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6IldjODFMR2hrRWNQNU1vK2h5QTg2QVR4bmpmVTNCNDF1V2hBcnM3WEZML0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilk3UjFIQTUyIiwibWUiOnsiaWQiOiIyMjg3MDU1ODA0MToyN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzNTc0MjU4NDM4OTY0OToyN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BId2tiOENFSXlxM01ZR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9nOGVKaXRIWC8xb05tM1N1MFY0eWNZR2JmZzhWVi9USVJDWk5aVndSQkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJXUHpva1dSdnRYUlNycWx4V1dhVzNjOVY4S0xveG4wOFdUVUpxWnIrZmdWZDR0cmVIM0gxRVh2T3Vmc0xDVCsrWndCb0d0aWpGcUMxanZEZi9MRUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuR25CRjFRYjRIK2w5cnBrYlVTVENxRmZ1Yk15MHRuakVKNVdaWmpGWDZKeXdzTE02SjBrY21uSTBYT00wYWMxRWJISVFsZ2R2ODZtL1ZhTjVBaDJEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyODcwNTU4MDQxOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRvUEhpWXJSMS85YURadDBydEZlTW5HQm0zNFBGVmYweUVRbVRXVmNFUVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODkyNjEwMSwibGFzdFByb3BIYXNoIjoibm0zQmIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "𝐃𝐑𝐊- 𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
