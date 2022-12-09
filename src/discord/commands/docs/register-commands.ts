import { environments } from 'config';
import { REST, Routes } from 'discord.js';

import { commands } from './commands';

const rest = new REST({ version: '10' }).setToken(environments.TOKEN);

export async function registerCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(environments.CLIENT_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}
