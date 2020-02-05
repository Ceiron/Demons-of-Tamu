const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

        if (msg.content == 'Selam') {
            msg.reply('Aleykum Selam hosgeldin');
        }
        else if (msg.content == 'selam') {
            msg.reply('Aleykum Selam hosgeldin');
        }
        else if (msg.content == 'selamlar') {
            msg.reply('Aleykum Selam hosgeldin');
        }
        else if (msg.content == 'Selamlar') {
            msg.reply('Aleykum Selam hosgeldin');
        }
        else if (msg.content == 'merhaba') {
            msg.reply('merhaba hosgeldin');
        }
        else if (msg.content == 'Merhaba') {
            msg.reply('Merhaba hosgeldin');
        }
        else if (msg.content == 'Esenlikler') {
            msg.reply('Esenlikler hosgeldin');
        }
        else if (msg.content == 'esenlikler') {
            msg.reply('Esenlikler hosgeldin');
        }
        else if (msg.content == 'slm') {
            msg.reply('http://tdk.gov.tr/');
        }
        else if (msg.content == 'Slm') {
            msg.reply('http://tdk.gov.tr/');
        }
});


client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const genel = member.guild.channels.find(ch => ch.name === 'genel');
    const onaylama = member.guild.channels.find(ch => ch.name === 'onaylama');
    // Do nothing if the channel wasn't found on this server
    if (!genel) return;
    // Send the message, mentioning the member
    genel.send(`@everyone Sunucumuza yeni birisi katıldı!, ${member}`);
    onaylama.send(`Demons of Tamuya hosgeldin! lutfen yonergeleri takip et, ${member}`);
  });

 

  setInterval(myMethod, 5000);
    function myMethod( )
    {
        var mountandbladeciler = new array();
        client.on('presenceUpdate', (newMember) => {
        console.log(newMember.user.displayName + " is playing " + newMember.presence.game);
        });
    }

client.login('Njc0NjY5MzM0MjA3MDA0Njkz.XjsALA.3ORmt2WNhI6UzKOgqqJ5K9WbNSo');