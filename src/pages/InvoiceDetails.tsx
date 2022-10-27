import React, { useContext, useState } from "react";
import InvoiceDetailsHeader from "../components/InvoiceDetailsHeader";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styled from "styled-components";
import { Theme, useTheme } from "@mui/material";
import InvoiceDetailsContent from "../components/InvoiceDetailsContent";
import { useWindowSize } from "../customHooks/useWindowSize";
import InvoiceDetailsFooter from "../components/InvoiceDetailsFooter";
import InvoiceDialog from "../components/InvoiceDialog";
import InvoiceForm from "../components/InvoiceForm";
import { InvoiceContext } from "../context/invoiceContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { paymentTermOptions } from "../constants";
import { IInvoiceForm } from "../types";
import { getBillingStatus } from "../helpers";
import InvoiceDetailsTable from "../components/InvoiceDetailsTable";

const meduimScreenSize = 899.95;

const StyledInvoiceDetails = styled.main`
  margin-top: 200px;

  .invoice-details {
    &__back-section {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    &__back-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 1.125rem;
      color: white;
      margin-bottom: 1.2rem;
    }
  }
`;

const columnNames: string[] = ["Item Name", "Qty", "Price", "Total"];

const InvoiceDetails = () => {
  const theme: Theme = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const screenSize = useWindowSize();
  const { id } = useParams();
  let navigate = useNavigate();

  const { getInvoiceById, removeInvoice, updateInvoice, markInvoicePaid } =
    useContext(InvoiceContext);

  const invoice = getInvoiceById(id || "3000");

  console.log("invoice", invoice);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const isScreenSizeMedium = (
    screenSize: number | undefined,
    meduimScreenSize: number
  ): boolean => {
    return screenSize != undefined && screenSize <= meduimScreenSize;
  };

  const saveDialog = (invoice: IInvoiceForm): void => {
    updateInvoice(invoice);
    closeDialog();
  };

  const deleteInvoice = (id: string): void => {
    removeInvoice(id);

    navigate("/");
  };

  return (
    <>
      <StyledInvoiceDetails>
        <div className="invoice-details__back-section">
          <Link
            className="invoice-details__back-link"
            aria-label="invoices"
            to={`/`}
          >
            <KeyboardArrowLeftIcon
              style={{ color: theme.palette.primary.main }}
            />
            Go Back
          </Link>
        </div>

        <InvoiceDetailsHeader
          theme={theme}
          id={invoice.id}
          billingStats={getBillingStatus(invoice.isPaid)}
          handleEditClicked={openDialog}
          handleDeleteClicked={deleteInvoice}
          handlePaidClicked={markInvoicePaid}
        />
        <InvoiceDetailsContent theme={theme} invoice={invoice}>
          <InvoiceDetailsTable
            items={invoice.items}
            columnNames={columnNames}
            screenWidth={screenSize}
          />
        </InvoiceDetailsContent>

        {isScreenSizeMedium(screenSize, meduimScreenSize) && (
          <InvoiceDetailsFooter
            id={invoice.id}
            theme={theme}
            handleEditClicked={openDialog}
            handleDeleteClicked={deleteInvoice}
          />
        )}
      </StyledInvoiceDetails>
      <InvoiceDialog isDialogOpen={isDialogOpen} title={`Edit #${invoice.id}`}>
        <InvoiceForm
          invoice={invoice}
          paymentOptions={paymentTermOptions}
          isEdit
          handleCancelClicked={closeDialog}
          handleSaveClicked={saveDialog}
        />
      </InvoiceDialog>
    </>
  );
};

export default InvoiceDetails;
