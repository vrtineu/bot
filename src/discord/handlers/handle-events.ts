import { Client, Message } from 'discord.js';

import { HandleCommands } from './handle-commands';

export class HandleEvents {
  constructor(
    private readonly client: Client<boolean>,
    private readonly handleCommands: HandleCommands
  ) {}

  public async init(): Promise<void> {
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client?.user?.tag}!`);
    });

    this.client.on('interactionCreate', this.handleCommands.init);

    this.client.on('messageCreate', (message: Message) => {
      console.info(
        `Message from ${message.author.tag} in ${message.channel.id}`
      );
    });
  }
}
