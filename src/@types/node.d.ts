declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      TOKEN: string;
      CLIENT_ID: string;
      CLIENT_ID_BNET: string;
      CLIENT_SECRET_BNET: string;
      API_URL_BNET: string;
      TOKEN_BNET: string;
    }
  }
}

export {};
