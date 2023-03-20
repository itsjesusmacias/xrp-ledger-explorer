// @ts-nocheck

// components
import { Box, Center, Divider, Text } from "@chakra-ui/react";
import { TransactionDetail } from "./TransactionDetail";

const TransactionList = ({ transactions, handleSearchTransanction }) => {
  const lastIndexTransaction = transactions.length - 1;
  const noTransactions = transactions.length === 0;

  return (
    <Box>
      {noTransactions && (
        <Text fontSize="2xl">
          No payment type transaction found. Please try with another account.
        </Text>
      )}
      {transactions.map(
        ({ hash, type, status, amount, date, accountTx, accountRx }, index) => (
          <Box as='ul' key={hash}>
            <TransactionDetail
              account={accountTx}
              type={type}
              status={status}
              date={date}
              amount={amount}
              destination={accountRx}
              handleSearchTransanction={handleSearchTransanction}
            />
            {lastIndexTransaction !== index && (
              <Center height="20px">
                <Divider orientation="vertical" />
              </Center>
            )}
          </Box>
        )
      )}
    </Box>
  );
};
export { TransactionList };
