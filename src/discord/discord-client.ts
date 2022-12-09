import { Client, GatewayIntentBits, Message, Partials } from 'discord.js';

import { handleCommands } from './handle-commands';

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('interactionCreate', handleCommands);

client.on('messageCreate', (message: Message) => {
  console.info(`Message from ${message.author.tag} in ${message.channel.id}`);
});

export { client as DiscordClient };
