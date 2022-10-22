import React, { useState } from "react";
import InvoiceDetailsHeader from "../components/InvoiceDetailsHeader";
import { IInvoiceForm } from "../types";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styled from "styled-components";
import { Theme, useTheme } from "@mui/material";
import InvoiceDetailsContent from "../components/InvoiceDetailsContent";
import { useWindowSize } from "../customHooks/useWindowSize";
import InvoiceDetailsFooter from "../components/InvoiceDetailsFooter";
import InvoiceDialog from "../components/InvoiceDialog";

const meduimScreenSize = 899.95;

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

const InvoiceDetails = () => {
  const theme: Theme = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const screenSize = useWindowSize();

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

  return (
    <>
      <StyledInvoiceDetails>
        <div className="invoice-details__back-section">
          <a
            className="invoice-details__back-link"
            aria-label="invoices"
            href={`/`}
          >
            <KeyboardArrowLeftIcon
              style={{ color: theme.palette.primary.main }}
            />
            Go Back
          </a>
        </div>

        <InvoiceDetailsHeader theme={theme} handleEditClicked={openDialog} />
        <InvoiceDetailsContent theme={theme} />
        {isScreenSizeMedium(screenSize, meduimScreenSize) && (
          <InvoiceDetailsFooter theme={theme} />
        )}
      </StyledInvoiceDetails>
      <InvoiceDialog
        closeDialog={closeDialog}
        openDialog={openDialog}
        isDialogOpen={isDialogOpen}
      />
    </>
  );
};

export default InvoiceDetails;
