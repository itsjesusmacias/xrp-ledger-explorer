import { fireEvent, render } from "@testing-library/react";
import { Mock } from "vitest";

// component
import { TransactionList } from "../components";

// utils
import { checkThatFieldIsVisible, getTransactions } from "./utils";

// mocks
import { transactions } from "./mocks/transactions";

describe("TransanctionList", () => {
  let fetchTransaction: null | Mock<any, any> = null;
  let handleSearchTransanction = null;

  beforeEach(() => {
    fetchTransaction = vi.fn();
    handleSearchTransanction = vi.fn((id) => () => fetchTransaction?.(id));

    render(
      <TransactionList
        transactions={transactions}
        handleSearchTransanction={handleSearchTransanction}
      />
    );
  });

  test(`${transactions.length} transactions are listed`, async () => {
    const $transactions = getTransactions();
    expect($transactions).toHaveLength(transactions.length);
  });

  test("all transactions details are listed", async () => {
    const $transactions = getTransactions();

    for (let index = 0; index < transactions.length; index++) {
      const { accountTx, accountRx, type, date, status, amount } =
        transactions[index];
      const $transaction = $transactions[index];

      await checkThatFieldIsVisible(accountTx, $transaction);
      await checkThatFieldIsVisible(accountRx, $transaction);
      await checkThatFieldIsVisible(type, $transaction);
      await checkThatFieldIsVisible(date, $transaction);
      await checkThatFieldIsVisible(amount.toString(), $transaction);
      await checkThatFieldIsVisible(status, $transaction);
    }
  });

  test(`when destination account is selected then fetchTransaction is called with account id`, async () => {
    const index = 0;
    const $transactions = getTransactions();
    const firstTransaction = transactions[index];
    const firstDestinationAccount = firstTransaction.accountRx;
    const $destinationAccount = await checkThatFieldIsVisible(
      firstDestinationAccount,
      $transactions[index]
    );

    fireEvent.click($destinationAccount);

    expect(fetchTransaction).toHaveBeenCalledTimes(1);
    expect(fetchTransaction).toHaveBeenCalledWith(firstDestinationAccount);
  });

  test(`when tx account is selected then fetchTransaction is called with account id`, async () => {
    const index = 0;
    const $transactions = getTransactions();
    const firstTransaction = transactions[index];
    const firstAccountTx = firstTransaction.accountTx;
    const $accountTx = await checkThatFieldIsVisible(
      firstAccountTx,
      $transactions[index]
    );

    fireEvent.click($accountTx);

    expect(fetchTransaction).toHaveBeenCalledTimes(1);
    expect(fetchTransaction).toHaveBeenCalledWith(firstAccountTx);
  });
});
