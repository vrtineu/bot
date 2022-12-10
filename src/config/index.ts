import 'dotenv/config';

const {
  TOKEN,
  CLIENT_ID,
  CLIENT_ID_BNET,
  CLIENT_SECRET_BNET,
  API_URL_BNET,
  TOKEN_BNET,
} = process.env;

export const environments = {
  TOKEN,
  CLIENT_ID,
  CLIENT_ID_BNET,
  CLIENT_SECRET_BNET,
  API_URL_BNET,
  TOKEN_BNET,
};
