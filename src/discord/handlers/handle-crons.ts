import cron from 'node-cron';

import { goodMorning } from '../interactions/morning';

export class HandleCrons {
  private readonly times = {
    everyMinute: '* * * * *',
    nineAm: '0 9 * * *',
  };

  public async init(): Promise<void> {
    cron.schedule(this.times.nineAm, () => {
      console.log('Running morning cron job...');
      goodMorning(['988927852403630091']);
    });
  }
}
