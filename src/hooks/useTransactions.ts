// @ts-nocheck

// hooks
import { useState } from "react";
import { useLocation } from "wouter";
import { usePromise } from "./usePromise";

// services
import { getTransactionsByAccount } from "../services/xrp";

// helpers
import { deserializerTransactions } from "../helpers";
import { ROUTES } from "../constants";

const useTransactions = () => {
  const [, navigate] = useLocation();

  const {
    result,
    isLoading,
    error,
    triggerPromise: fetchGetTransaction,
  } = usePromise(getTransactionsByAccount, {
    triggerPromiseOnMount: true,
    deserializerFn: deserializerTransactions,
  });

  const [accountId, setAccountId] = useState("");

  const handleAccountId = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const currentAccountId = evt.target.value;
    setAccountId(currentAccountId);
  };

  const searchTransanction = (targetAccountId: string) =>
    fetchGetTransaction(targetAccountId).then(() =>
      navigate(`/accounts/${targetAccountId}`)
    );

  const transactions = result?.transactions || [];
  const accountDetails = result?.accountDetails || {};
  const noResult = error || transactions.length === 0;

  const backToHome = () => navigate(ROUTES.HOME);

  // TODO FIX Cuando se vuelve atrás no carga el account de la URL
  // falta comprobar que location no corresponde con el account mostrado
  // y hacer un navigate.

  return {
    isLoading,
    backToHome,
    searchTransanction,
    transactions,
    accountDetails,
    accountId,
    handleAccountId,
    noResult,
  };
};

export { useTransactions };
