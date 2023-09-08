require("dotenv").config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TG_TOKEN);
bot.command('link', async (ctx) => {
  const { payload, from, chat } = ctx;
  console.log("payload", payload, "fromId", from.id, "from username", from.username, "from", from, 'chat', chat);
  if (from.is_bot) {
    ctx.reply(`I won't respond to commands from a bot`);
    return;
  }

  if (ctx.chat.type === "group") {
    const admins = await ctx.getChatAdministrators(chat.id);
    const adminIds = admins.map(admin => admin.user.id);
    if (adminIds.includes(from.id)) {
      ctx.reply(`From user admin: ${ from.first_name } ${ from.last_name }`);
    }
  } else {
    ctx.reply(`Payload: ${ payload }; from: ${ JSON.stringify(from) }`);
  }

  ctx.reply('got command: link');
});
bot.on('text', (ctx) => ctx.reply('👍'));

bot.launch();
