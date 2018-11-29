const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTE3MDI5MDU4OTA3OTk2MTYy.DuH4Dw.9vDYDz7x2AZAWA9OYOholRBfhU8);//where BOT_TOKEN is the token of our bot
