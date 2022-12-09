import cron from 'node-cron';

import { morningCron } from './interactions/morning-cron';

export async function handleCrons() {
  const times = {
    nineAm: '0 9 * * *',
  };

  cron.schedule(times.nineAm, () => {
    console.log('Running morning cron job...');
    morningCron(['988927852403630091']);
  });
}
