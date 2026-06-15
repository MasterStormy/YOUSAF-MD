const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/MasterStormy/YOUSAF-MD",
REPO_NAME: process.env.REPO_NAME || "YOUSAF-MD",
BOT_NAME: process.env.BOT_NAME || "YOUSAF-MD",
DESCRIPTION: process.env.DESCRIPTION || "YOUSAF MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923109506687",
OWNER_NAME: process.env.OWNER_NAME || "YOUSAF Official",
ST_SAVE: process.env.ST_SAVE || "YOUSAF-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "YOUSAF-MD-BY-YOUSAF-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY YOUSAF-MD`* _*POWERD BY*_ *YOUSAF Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "YOUSAF-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ YOUSAF-MD BY YOUSAF-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363424161542465@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029Vb6o6B07oQhai2nzua11",
INSTA: process.env.INSTA || " ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/uy4y1h.jpg",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/uy4y1h.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://files.catbox.moe/uy4y1h.jpg",
AI_IMG: process.env.AI_IMG || "https://n.uguu.se/BlGoHUJU.jpg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/uy4y1h.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/uy4y1h.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/uy4y1h.jpg",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/uy4y1h.jpg",
FUN_IMG: process.env.FUN_IMG || "https://files.catbox.moe/uy4y1h.jpg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/uy4y1h.jpg",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/uy4y1h.jpg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/uy4y1h.jpg",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/uy4y1h.jpg",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/uy4y1h.jpg"
};
