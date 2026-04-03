const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'astrasmp247.aternos.me',
    port: 13185,
    username: 'AFK_Bot'
  });

  bot.on('spawn', () => {
    console.log('Bot joined');

    moveBot(bot);
  });

  bot.on('end', () => {
    setTimeout(createBot, 5000);
  });
}

// 🔥 Movement function
function moveBot(bot) {
  const actions = ['forward', 'back', 'left', 'right'];

  setInterval(() => {
    const action = actions[Math.floor(Math.random() * actions.length)];

    bot.setControlState(action, true);

    // stop after 2 sec
    setTimeout(() => {
      bot.setControlState(action, false);
    }, 2000);

    // random jump
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);

    // random look (rotation)
    const yaw = Math.random() * Math.PI * 2;
    const pitch = (Math.random() - 0.5) * Math.PI / 2;
    bot.look(yaw, pitch);

  }, 5000);
}

createBot();
