import { Client, Message } from 'discord.js';

import { handleCommands } from './handle-commands';

export async function handleEvents(client: Client<boolean>) {
  client.on('ready', () => {
    console.log(`Logged in as ${client?.user?.tag}!`);
  });

  client.on('interactionCreate', handleCommands);

  client.on('messageCreate', (message: Message) => {
    console.info(`Message from ${message.author.tag} in ${message.channel.id}`);
  });
}
