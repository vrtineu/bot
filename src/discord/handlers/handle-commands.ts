import { OAuthClient } from 'config/oauth';
import { CacheType, Interaction } from 'discord.js';

export async function handleCommands(interaction: Interaction<CacheType>) {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'server') {
    await interaction.reply('Server info.');
  }

  if (interaction.commandName === 'wow') {
    const client = new OAuthClient();
    const token = await client.getAccessToken();
    console.log('🚀 ~ file: handle-commands.ts:42 ~ token', token);
    await interaction.reply('World of Warcraft info.');
  }
}
