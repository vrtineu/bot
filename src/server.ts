import { environments } from 'config';
import { registerCommands } from 'discord/commands/docs/register-commands';
import { DiscordClient } from 'discord/discord-client';
import { handleCrons } from 'discord/handlers/handle-crons';
import { handleEvents } from 'discord/handlers/handle-events';

const bootstrap = async () => {
  await registerCommands();
  await handleEvents(DiscordClient);
  await DiscordClient.login(environments.TOKEN);
  await handleCrons();
};
bootstrap();
