import { Theme, useTheme } from "@mui/material";
import { useState } from "react";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceDialog from "../components/InvoiceDialog";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceHeader from "../components/InvoiceHeader";
import { invoicesList } from "../constants";
import { useWindowSize } from "../customHooks/useWindowSize";
import {
  IBillingOption,
  IBillingStatus,
  IInvoice,
  IInvoiceForm,
} from "../types";

const BillingStatusOptions: IBillingOption[] = [
  {
    id: 0,
    status: "None",
  },
  {
    id: IBillingStatus.PAID,
    status: "Paid",
  },
  {
    id: IBillingStatus.PENDING,
    status: "Pending",
  },
  {
    id: IBillingStatus.DRAFT,
    status: "Draft",
  },
];
const invoice: IInvoiceForm = {
  billFrom: {
    city: "syria",
    country: "damascus",
    postCode: "1231",
    streetAddress: "lajd 1938 ",
  },
  billTo: {
    city: "syria",
    clientEmail: "test@gmail.com",
    clientName: "first client",
    country: "der al zor",
    postCode: "ljd123",
    streetAddress: "alskjd 1289 ",
  },
  date: "2/12/2020",
  items: [
    {
      id: 1,
      name: "first item",
      price: 200,
      quantity: 15,
    },
    {
      id: 2,
      name: "second item",
      price: 400,
      quantity: 10,
    },
    {
      id: 3,
      name: "third item",
      price: 500,
      quantity: 5,
    },
  ],
  paymentTerms: 3,
  projectDescription: "first project",
};

const Invoices = () => {
  const screenWidth = useWindowSize();
  const theme: Theme = useTheme();

  const [invoices, setInvoices] = useState<IInvoice[]>(invoicesList);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<number>(0);
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] =
    useState<boolean>(false);

  const openFilterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);

    setIsFilterMenuOpen((old) => !old);
  };

  const filterInvoicesByStatus = (id: number): void => {
    setIsFilterMenuOpen(false);

    setStatusFilter(id);
  };

  const openInvoiceDialog = (): void => {
    setIsInvoiceDialogOpen(true);
  };
  const closeInvoiceDialog = (): void => {
    setIsInvoiceDialogOpen(false);
  };
  const filterdInvoicesList = invoices.filter(
    (invoice) => !statusFilter || invoice.billingStatus == statusFilter
  );

  return (
    <>
      <InvoiceDialog isDialogOpen={isInvoiceDialogOpen} title="Edit #lksjdf2">
        <InvoiceForm
          invoice={invoice}
          handleCancelClicked={closeInvoiceDialog}
          handleSaveClicked={openInvoiceDialog}
        />
      </InvoiceDialog>
      <main style={{ marginTop: "10rem" }}>
        <InvoiceHeader
          screenWidth={screenWidth}
          isFilterMenuOpen={isFilterMenuOpen}
          handleFilterButtonToggled={openFilterMenu}
          BillingStatusOptions={BillingStatusOptions}
          handleFilterItemSelected={filterInvoicesByStatus}
          handleNewInvoiceClicked={openInvoiceDialog}
        />
        {filterdInvoicesList.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            {...invoice}
            theme={theme}
            screenSize={screenWidth}
          />
        ))}
      </main>
    </>
  );
};

export default Invoices;
