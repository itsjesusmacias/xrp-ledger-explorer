// types
import { TypesTransaction, StatusTransaction } from "../types";

// TODO Lo ideal sería controlar con process.env la URL donde apuntamos
export const SERVER_RIPPLE: string = "wss://s.altnet.rippletest.net:51233";

export const ROUTES = {
  HOME: "/",
  ACCOUNT_DETAILS: "/accounts/:accountId",
};

export const TRANSACTION_TYPE: {
  PAYMENT: TypesTransaction;
} = {
  PAYMENT: "Payment",
};

export const STATUS_TRANSACTION: {
  tesSUCCESS: StatusTransaction;
  default: "unknow";
} = {
  tesSUCCESS: "success",
  default: "unknow",
};

export const PARAMS_ACCOUNT_TX = {
  command: "account_tx",
  binary: false,
  forward: false,
  ledger_index_min: -1,
  ledger_index_max: -1,
  limit: 100,
};

export const FORMAT_DATE: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

// TODO lo ideal sería usar localStorage y poner las últimas búsquedas
export const ACCOUNTS_ID_EXAMPLES = [
  "r3xdXpYQR6Tb9BnU4RxLHCTFoDyn8AFAe6",
  "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
];
