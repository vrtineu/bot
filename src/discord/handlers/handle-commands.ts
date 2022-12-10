import { OAuthClient } from 'config/oauth';
import { CacheType, Interaction } from 'discord.js';
import { tokenPrice } from 'providers/battle-net/token-price';

export async function handleCommands(interaction: Interaction<CacheType>) {
  const client = new OAuthClient();
  const battleNetToken = await client.getAccessToken();

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'server') {
    await interaction.reply('Server info.');
  }

  if (interaction.commandName === 'token') {
    const { price } = await tokenPrice(battleNetToken as string);
    await interaction.reply(`Token: ${price}`);
  }
}
