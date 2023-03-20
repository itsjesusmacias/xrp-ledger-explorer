// Components
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

// types
interface Props {
  accountId: string;
  handleAccountId: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  searchTransanction: (targetAccountId: string) => Promise<void>;
}

const AccountSearch = ({
  accountId,
  handleAccountId,
  searchTransanction,
}: Props) => {
  const handleSearchTransanction = () => searchTransanction(accountId);

  return (
    <InputGroup size="sm">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Search by Account"
        value={accountId}
        onChange={handleAccountId}
      />
      <InputRightElement width="3.2rem">
        <Button
          h="1.6rem"
          size="sm"
          onClick={handleSearchTransanction}
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.100",
          }}
        >
          <Search2Icon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export { AccountSearch };
