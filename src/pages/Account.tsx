// @ts-nocheck

// components
import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import {
  TabsContainer,
  TabsLink,
  Assets,
  TransactionList,
} from "../components/";

// context
import { Tabs } from "../context/Tabs";

const Account = ({
  transactions,
  accountDetails,
  searchTransanction,
  isLoading,
}) => {
  const account = accountDetails.accountId;

  const handleSearchTransanction = (accountId) => () =>
    searchTransanction(accountId);

  return (
    <Box paddingTop="18">
      <Heading as="h1" size="xl" lineHeight="4.8rem">
        {account}
      </Heading>

      {isLoading && (
        <Center paddingY={40}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}

      {!isLoading && (
        <Tabs>
          <TabsLink>
            <Text>Transactions</Text>
            <Text>Assets</Text>
          </TabsLink>

          <TabsContainer>
            <TransactionList
              transactions={transactions}
              handleSearchTransanction={handleSearchTransanction}
            />
            <Assets />
          </TabsContainer>
        </Tabs>
      )}
    </Box>
  );
};

export { Account };
