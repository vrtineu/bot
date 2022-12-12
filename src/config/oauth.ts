import { environments } from 'config';
import { ClientCredentials, Token, ModuleOptions } from 'simple-oauth2';

const { CLIENT_ID_BNET, CLIENT_SECRET_BNET, TOKEN_BNET } = environments;

const options: ModuleOptions = {
  client: {
    id: CLIENT_ID_BNET,
    secret: CLIENT_SECRET_BNET,
  },
  auth: {
    tokenHost: TOKEN_BNET,
    tokenPath: '/token',
  },
};

export class OAuthClient {
  private client: ClientCredentials;
  private token: Token | null;

  constructor() {
    this.client = new ClientCredentials(options);
    this.token = null;
  }

  public async getAccessToken(): Promise<string> {
    try {
      if (this.token === null || this.token.expired()) {
        const { token } = await this.client.getToken({
          scope: 'wow.profile',
        });
        this.token = this.client.createToken(token);
      }

      return this.reduceToken(this.token);
    } catch (error) {
      throw new Error(`Error retrieving access token: ${error}`);
    }
  }

  private reduceToken({ token }: Token): string {
    return token.access_token;
  }
}
