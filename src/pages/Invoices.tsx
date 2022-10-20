import { Theme, useTheme } from "@mui/material";
import { useState } from "react";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceDialog from "../components/InvoiceDialog";
import InvoiceHeader from "../components/InvoiceHeader";
import { invoicesList } from "../constants";
import { useWindowSize } from "../customHooks/useWindowSize";
import { IBillingOption, IBillingStatus, IInvoice } from "../types";

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

const Invoices = () => {
  const screenWidth = useWindowSize();
  const theme: Theme = useTheme();

  const [invoices, setInvoices] = useState<IInvoice[]>(invoicesList);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [statusFilter, setStatusFilter] = useState<number>(0);
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] =
    useState<boolean>(false);

  const openFilterMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);

    setAnchorEl(event.currentTarget);

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
      <InvoiceDialog
        closeDialog={closeInvoiceDialog}
        openDialog={openInvoiceDialog}
        isDialogOpen={isInvoiceDialogOpen}
      />
      <main style={{ marginTop: "10rem" }}>
        <InvoiceHeader
          screenWidth={screenWidth}
          isFilterMenuOpen={isFilterMenuOpen}
          handleFilterButtonToggled={openFilterMenu}
          BillingStatusOptions={BillingStatusOptions}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          handleFilterItemSelected={filterInvoicesByStatus}
          handleNewInvoiceClicked={openInvoiceDialog}
        />
        {filterdInvoicesList.map((invoice) => (
          <InvoiceCard key={invoice.id} {...invoice} theme={theme} />
        ))}
      </main>
    </>
  );
};

export default Invoices;
