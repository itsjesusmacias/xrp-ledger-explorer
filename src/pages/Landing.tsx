// components
import {
  Center,
  Heading,
  Text,
  HStack,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";

// constants
import { ACCOUNTS_ID_EXAMPLES } from "../constants";

const Landing = ({ searchTransanction, isLoading }) => {

  const handleClickAccount = (accountId: string) => () => {
    searchTransanction(accountId);
  };

  return (
    <VStack paddingTop="44">
      <Center>
        <Heading as="h1" size="3xl" lineHeight="4.8rem">
          XRP Ledger Explorer is a website to consult the
          <Text as="span" color="blue.400">
            {" "}
            payment transantions{" "}
          </Text>
          carried out by an account
        </Heading>
      </Center>

      <Flex paddingTop="32" direction="column" width="full">
        <Text fontSize="2xl" borderBottom="4px" borderColor="blue.200">
          Accounts examples
        </Text>

        <HStack spacing="24px" paddingTop="8">
          {ACCOUNTS_ID_EXAMPLES.map((accountId) => (
            <Button
              isLoading={isLoading}
              key={accountId}
              onClick={handleClickAccount(accountId)}
            >
              {accountId}
            </Button>
          ))}
        </HStack>
      </Flex>
    </VStack>
  );
};

export { Landing };
