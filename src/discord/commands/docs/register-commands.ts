import { environments } from 'config';
import { REST, Routes } from 'discord.js';

import { commands } from './commands';

export class RegisterCommands {
  constructor(private readonly rest: REST) {}

  public async init(): Promise<void> {
    try {
      console.log('Started refreshing application (/) commands.');

      await this.rest.put(Routes.applicationCommands(environments.CLIENT_ID), {
        body: commands,
      });

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      throw new Error(`Error registering commands: ${error}`);
    }
  }
}
