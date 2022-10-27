import * as React from "react";
import { invoicesList } from "../constants";
import { IBillingStatus, IInvoiceForm, InvoiceContextType } from "../types";

export const InvoiceContext = React.createContext<InvoiceContextType>({
  invoices: [],
  getInvoiceById: (id: string): IInvoiceForm => {
    return {} as IInvoiceForm;
  },
  addInvoice: (invoice: IInvoiceForm): void => {},
  removeInvoice: (id: string): void => {},
  updateInvoice: (invoice: IInvoiceForm): void => {},
  markInvoicePaid: (id: string): void => {},
  invoiceStatusFilter: IBillingStatus.None,
  setInvoiceStatusFilter: (status: IBillingStatus): void => {},
});

interface Props {
  children: JSX.Element;
}

export const InvoiceProvider: React.FC<Props> = ({ children }: Props) => {
  const [invoices, setInvoices] = React.useState(invoicesList);
  const [invoiceStatusFilter, setInvoiceStatusFilter] =
    React.useState<IBillingStatus>(IBillingStatus.None);

  const getInvoiceById = (id: string): IInvoiceForm => {
    const invoice: IInvoiceForm =
      invoices.find((x) => x.id == id) || ({} as IInvoiceForm);

    return invoice;
  };

  const addInvoice = (invoice: IInvoiceForm): void => {
    const newInvoicesList = [{ ...invoice }, ...invoices];

    setInvoices(newInvoicesList);
  };

  const removeInvoice = (id: string): void => {
    const newInvoicesList = invoices.filter((x) => x.id != id);

    setInvoices(newInvoicesList);
  };

  const updateInvoice = (invoice: IInvoiceForm): void => {
    const newInvoicesList = invoices.map((x) => {
      if (x.id == invoice.id) {
        return { ...invoice };
      } else {
        return x;
      }
    });
    setInvoices(newInvoicesList);
  };

  const markInvoicePaid = (id: string): void => {
    const newInvoicesList = invoices.map((x) => {
      if (x.id == id) {
        return { ...x, isPaid: true };
      } else {
        return x;
      }
    });
    setInvoices(newInvoicesList);
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        invoiceStatusFilter,
        setInvoiceStatusFilter,
        getInvoiceById,
        addInvoice,
        removeInvoice,
        updateInvoice,
        markInvoicePaid,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
