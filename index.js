const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TARGET_CHANNEL_ID = "340327713325973505"; // Where images will post
const imageURL = "https://imgur.com/a/Y1LUdMZ";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  const kentRegex = /\bkent\b/i;
  if (kentRegex.test(message.content)) {
    const targetChannel = message.guild.channels.cache.get(TARGET_CHANNEL_ID);
    if (targetChannel) targetChannel.send(imageURL);
  }
});

// ✅ Login using environment variable
client.login(process.env.TOKEN);
