// pages
import { Landing, Account, NotFound } from "./pages/";

// routing for React -> Wouter
import { Route, Switch } from "wouter";

// components
import { Container } from "@chakra-ui/react";
import { Header } from "./components";

// constants
import { ROUTES } from "./constants";

// hooks
import { useTransactions } from "./hooks/useTransactions";

const App = () => {
  const {
    isLoading,
    searchTransanction,
    transactions,
    accountDetails,
    accountId,
    handleAccountId,
    backToHome,
  } = useTransactions();

  return (
    <Container maxW="container.lg">
      <Header
        accountId={accountId}
        backToHome={backToHome}
        handleAccountId={handleAccountId}
        searchTransanction={searchTransanction}
      />

      <Switch>
        <Route
          path={ROUTES.HOME}
          component={() => (
            <Landing
              searchTransanction={searchTransanction}
              isLoading={isLoading}
            />
          )}
        />

        <Route
          path={ROUTES.ACCOUNT_DETAILS}
          component={() => (
            <Account
              transactions={transactions}
              accountDetails={accountDetails}
              searchTransanction={searchTransanction}
              isLoading={isLoading}
            />
          )}
        />

        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export { App };
