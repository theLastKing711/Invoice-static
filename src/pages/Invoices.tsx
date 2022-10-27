import { Theme, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceDialog from "../components/InvoiceDialog";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceHeader from "../components/InvoiceHeader";
import { defaultInvoice, paymentTermOptions } from "../constants";
import { InvoiceContext } from "../context/invoiceContext";
import { useWindowSize } from "../customHooks/useWindowSize";
import { getBillingStatus } from "../helpers";
import { IBillingOption, IBillingStatus, IInvoiceForm } from "../types";

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
const invoice: IInvoiceForm = defaultInvoice;

const Invoices = () => {
  const screenWidth = useWindowSize();
  const theme: Theme = useTheme();
  const { invoices, addInvoice, invoiceStatusFilter, setInvoiceStatusFilter } =
    useContext(InvoiceContext);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] =
    useState<boolean>(false);

  const openFilterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsFilterMenuOpen((old) => !old);
  };

  const filterInvoicesByStatus = (id: number): void => {
    setIsFilterMenuOpen(false);

    setInvoiceStatusFilter(id);
  };

  const openInvoiceDialog = (): void => {
    setIsInvoiceDialogOpen(true);
  };
  const closeInvoiceDialog = (): void => {
    setIsInvoiceDialogOpen(false);
  };

  const filterdInvoicesList = invoices.filter(
    (invoice) =>
      !invoiceStatusFilter ||
      getBillingStatus(invoice.isPaid) == invoiceStatusFilter
  );

  const saveInvoice = (invoice: IInvoiceForm): void => {
    addInvoice(invoice);

    closeInvoiceDialog();
  };

  return (
    <>
      <InvoiceDialog isDialogOpen={isInvoiceDialogOpen} title="New Invoice">
        <InvoiceForm
          invoice={invoice}
          paymentOptions={paymentTermOptions}
          handleCancelClicked={closeInvoiceDialog}
          handleSaveClicked={saveInvoice}
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
