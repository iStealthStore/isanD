const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged In as ${client.user.username}#${client.user.discriminator}`)
    client.user.setPresence({
        status: "online",  
        game: {
            name: "SELL NITRO 25K, Join iStealth Store!",  
            type: "STREAMING" 
        }
    });
})

client.login(process.env.TOKEN2)