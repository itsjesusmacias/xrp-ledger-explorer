import { Client, AccountTxRequest, AccountTxResponse } from "xrpl";

// constants
import { PARAMS_ACCOUNT_TX, SERVER_RIPPLE } from "../constants";

let client: Client | null = null;

// Private
const connectRippleClient = async () => {
  client = new Client(SERVER_RIPPLE);
  await client.connect();
};

const disconnectRippleClient = async () => await client?.disconnect();

const xrplRequest = async (params: AccountTxRequest) => await client?.request(params);

// Publics
const getTransactionsByAccount = async (account: string): Promise<AccountTxResponse> => {
  await connectRippleClient();

  const params = {
    ...PARAMS_ACCOUNT_TX,
    account,
  };

  const result = await xrplRequest(params);

  await disconnectRippleClient();

  return result as AccountTxResponse;
};

export { getTransactionsByAccount };
