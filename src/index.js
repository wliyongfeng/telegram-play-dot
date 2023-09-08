require("dotenv").config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TG_TOKEN);
bot.on('text', (ctx) => ctx.reply('👍'));

bot.launch();
