// components
import { Box, Badge, Text } from "@chakra-ui/react";

// types
import { Transaction } from "../types";

interface Props extends Transaction {
  handleSearchTransanction: () => null;
}

const TransactionDetail = ({
  account,
  type,
  status,
  date,
  amount,
  destination,
  handleSearchTransanction,
}: Props) => {
  return (
    <Box as="li" listStyleType="none" paddingY={4}>
      <Text>
        This transactions was <Text as="span">{status}</Text> -{" "}
        <Badge colorScheme="green">{type}</Badge>
      </Text>
      <Text>
        This payment is from{" "}
        <Text
          as="b"
          onClick={handleSearchTransanction(account)}
          decoration="underline"
          textDecorationColor="blue.200"
          _hover={{ color: "blue.400" }}
        >
          {account}
        </Text>{" "}
        to{" "}
        <Text
          as="b"
          onClick={handleSearchTransanction(destination)}
          decoration="underline"
          textDecorationColor="blue.200"
          _hover={{ color: "blue.400" }}
        >
          {destination}
        </Text>{" "}
        on <Text as="span">{date}</Text>
      </Text>

      <Text>
        Amount: <Text as="span">{amount}</Text> XRP
      </Text>
    </Box>
  );
};

export { TransactionDetail };
