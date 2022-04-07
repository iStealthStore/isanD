const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged In as ${client.user.username}#${client.user.discriminator}`)
    client.user.setActivity('SELL NITRO BOOST 25K', { type: 'PLAYING' })
})

client.login(process.env.TOKEN2)
