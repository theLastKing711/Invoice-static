// context/todoContext.tsx
import * as React from "react";
import { defaultInvoice } from "../constants";
import { IInvoiceForm, InvoiceContextType } from "../types";
// import { TodoContextType, ITodo } from '../@types/todo';

export const InvoiceContext = React.createContext<InvoiceContextType | null>(
  null
);

interface Props {
  children: JSX.Element;
}

const InvoiceProvider: React.FC<Props> = ({ children }: Props) => {
  const [invoice, setInvoice] = React.useState<IInvoiceForm>(defaultInvoice);

  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};
