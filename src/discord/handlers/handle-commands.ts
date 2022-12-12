import { CacheType, Interaction } from 'discord.js';
import { tokenPrice } from 'providers/battle-net/token-price';

export class HandleCommands {
  constructor(private readonly battleNetToken: string) {}

  public async init(interaction: Interaction<CacheType>): Promise<void> {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'server') {
      await interaction.reply('Server info.');
    }

    if (interaction.commandName === 'token') {
      const { price } = await tokenPrice(this.battleNetToken);
      await interaction.reply(`Token: ${price}`);
    }
  }
}
