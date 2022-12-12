import { environments } from 'config';
import { OAuthClient } from 'config/oauth';
import { REST } from 'discord.js';
import { RegisterCommands } from 'discord/commands/docs/register-commands';
import { DiscordClient } from 'discord/discord-client';
import { HandleCommands } from 'discord/handlers/handle-commands';
import { HandleCrons } from 'discord/handlers/handle-crons';
import { HandleEvents } from 'discord/handlers/handle-events';

const bootstrap = async () => {
  const { TOKEN } = environments;

  const oAuthClient = new OAuthClient();
  const accessToken = await oAuthClient.getAccessToken();

  const handleCommands = new HandleCommands(accessToken);

  const registerCommands = new RegisterCommands(new REST({ version: '10' }));
  await registerCommands.init();

  const handleEvents = new HandleEvents(DiscordClient, handleCommands);
  await handleEvents.init();

  const handleCrons = new HandleCrons();
  await handleCrons.init();

  await DiscordClient.login(TOKEN);
};
bootstrap();
