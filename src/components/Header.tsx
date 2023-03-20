// components
import { Box, Flex, Image, Spacer, Link } from "@chakra-ui/react";
import { AccountSearch } from "./AccountSearch";

// types

interface Props {
  accountId: string;
  backToHome: () => void;
  handleAccountId: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  searchTransanction: (targetAccountId: string) => Promise<void>;
}

const Header = ({ accountId, handleAccountId, searchTransanction, backToHome }: Props) => (
  <Flex paddingY="4" alignItems="center">
    <Box>
      <Link onClick={backToHome}>
        <Image
          height="8"
          src="/XRPLedger_DevPortal-white.svg"
          color="black"
          alt="XRP Ledger Logo"
        />
      </Link>
    </Box>
    <Spacer />
    <Box h="8">
      <AccountSearch
        accountId={accountId}
        handleAccountId={handleAccountId}
        searchTransanction={searchTransanction}
      />
    </Box>
  </Flex>
);

export { Header };
