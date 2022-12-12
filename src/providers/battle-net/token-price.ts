import axios from 'axios';
import { environments } from 'config';

export async function tokenPrice(token: string) {
  const params = {
    namespace: 'dynamic-us',
    locale: 'pt_BR',
  };

  const url = `${environments.API_URL_BNET}/data/wow/token/index?namespace=${params.namespace}&locale=${params.locale}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        charset: 'utf-8',
        'cache-control': 'public',
        'max-age': '300',
        'last-modified': new Date().toUTCString(),
      },
    });

    return data;
  } catch (error) {
    throw new Error(`Error fetching token price: ${error}`);
  }
}
