import { CacheType, Interaction } from 'discord.js';

export async function handleCommands(interaction: Interaction<CacheType>) {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'server') {
    await interaction.reply('Server info.');
  }
}
