import { config } from 'config';
import { registerCommands } from 'discord/commands/docs/register-commands';
import { DiscordClient } from 'discord/discord-client';
import { handleCrons } from 'discord/handle-crons';

const bootstrap = async () => {
  await registerCommands();
  await DiscordClient.login(config.TOKEN);
  await handleCrons();
};
bootstrap();
