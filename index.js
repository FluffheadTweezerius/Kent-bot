const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent // privileged
  ]
});

const TOKEN = "MTQ3NzU0MTQ2ODEyMDk0NDg0Mg.G0tJGt.HQ61zwAuwztyAPhoskbv5OrqhDg7HawbhLWFwY";
const imageURL = "https://imgur.com/a/Y1LUdMZ";

// Replace this with your target channel ID (where the bot should post)
const TARGET_CHANNEL_ID = "340327713325973505";

client.on("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  // Check if the message anywhere contains "kent"
  if (message.content.toLowerCase().includes("kent")) {
    // Send the image to the specific channel
    const targetChannel = message.guild.channels.cache.get(TARGET_CHANNEL_ID);
    if (targetChannel) {
      targetChannel.send(imageURL);
    } else {
      console.log("Target channel not found!");
    }
  }
});

client.login(TOKEN);