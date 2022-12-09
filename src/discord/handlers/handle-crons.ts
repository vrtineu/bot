import cron from 'node-cron';

import { goodMorning } from '../interactions/morning';

export async function handleCrons() {
  const times = {
    nineAm: '0 9 * * *',
  };

  cron.schedule(times.nineAm, () => {
    console.log('Running morning cron job...');
    goodMorning(['988927852403630091']);
  });
}
