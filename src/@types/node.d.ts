declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      TOKEN: string;
      CLIENT_ID: string;
    }
  }
}

export {};
