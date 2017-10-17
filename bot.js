const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready',() =>{
  console.log('Online');
});

var prefix = "v!"

client.on('message', message =>{
    if(!message.content.startsWith(prefix)) return;
    if message.author.bot) return;

    if(message.content.startsWith(prefix+'ping')) {
      message.channel.sendMessage(`:white_check_mark:  **| PONG!** - \`${Date.now() - message.createdTimestamp}ms\``);
    }
});

client.login(process.env.TOKEN);
