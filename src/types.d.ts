// types 

export type TypesTransaction = 'Payment';

export type StatusTransaction = 'success';

// interfaces

export interface Transaction {
  account: number;
  type: TypesTransaction;
  status: StatusTransaction;
  date: string;
  amount: string;
  destination: string;
};
