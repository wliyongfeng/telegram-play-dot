require("dotenv").config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TG_TOKEN);
bot.command('link', (ctx) => {
  const { payload, from, chat } = ctx;
  console.log("payload", payload, "fromId", from.id, "from username", from.username, "from", from, 'chat', chat);
  console.log(ctx);
  ctx.reply('got command');
});
bot.on('text', (ctx) => ctx.reply('👍'));

bot.launch();
