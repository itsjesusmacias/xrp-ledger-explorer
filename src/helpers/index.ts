// @ts-nocheck

// constants
import {
  TRANSACTION_TYPE,
  STATUS_TRANSACTION,
  FORMAT_DATE,
} from "../constants";

/*
 TODO Pendiente gestionar caso de fracaso

 Terminar de tipar
 Guardar en local storage las repuesta y recuperarlas,
    key -> accountId
    res

*/

const formatterDate = (date: number) => 
  new Intl.DateTimeFormat("default", FORMAT_DATE)
    .format(date * 1000)
    .toString();

const deserializerTransactions = (response) => {
  const { result } = response;
  const accountDetails = { accountId: result.account };
  const { transactions } = result;
  const paymentTransactions = transactions
    .filter(({ tx }) => tx.TransactionType === TRANSACTION_TYPE.PAYMENT)
    .map((transaction) => {
      const { tx, meta } = transaction;

      const hash = tx.hash;
      const accountTx = tx.Account;
      const accountRx = tx.Destination;
      const type = tx.TransactionType;
      const date = formatterDate(tx.date);
      const amount = Number(tx.Amount) / 1000000;
      const status = STATUS_TRANSACTION[meta.TransactionResult];

      return {
        amount,
        date,
        hash,
        accountTx,
        accountRx,
        status,
        type,
      };
    });

  return {
    accountDetails,
    transactions: paymentTransactions,
  };
};

export { deserializerTransactions };
