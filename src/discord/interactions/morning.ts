import { TextChannel } from 'discord.js';
import { DiscordClient } from 'discord/discord-client';

const message =
  'Hello everyone! Good morning and have a great day! :smile: :coffee:';

export async function goodMorning(channelId: string[]) {
  channelId.map(async (id) => {
    const channel = (await DiscordClient.channels.fetch(id)) as TextChannel;
    await channel.send(message);
  });
}
