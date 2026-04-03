const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'astrasmp247.aternos.me',
    port: 13185,
    username: 'AFK_Bot'
  });

  bot.on('spawn', () => {
    console.log('Bot joined');
  });

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);

  bot.on('end', () => {
    setTimeout(createBot, 5000);
  });
}

createBot();
