import 'dotenv/config';

type Config = {
  TOKEN: string;
  CLIENT_ID: string;
};

export const config: Config = {
  TOKEN: process.env.TOKEN as string,
  CLIENT_ID: process.env.CLIENT_ID as string,
};
