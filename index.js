const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged In as ${client.user.username}#${client.user.discriminator}`)
    client.user.setPresence({ game: { name: 'SELL NITRO 25K' }, status: 'dnd' })
})

client.login(process.env.TOKEN2)
