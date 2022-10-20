import Dialog, { DialogProps } from "@mui/material/Dialog";
import { CardContent, useTheme } from "@mui/material";
import { styled as materialStyled } from "@mui/material/styles";
import { Dayjs } from "dayjs";
import InvoiceForm from "./InvoiceForm";
import { useState } from "react";
import { IInvoiceForm } from "../types";

const StyledDialog = materialStyled(Dialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialog-container": {
    justifyContent: "flex-start",
    padding: "115px 0 0 0",
    [theme.breakpoints.up("lg")]: {
      padding: "0 0 0 115px",
    },

    "& .MuiDialog-paper": {
      margin: 0,
      minHeight: "100%",
      padding: "3rem 2rem 1.5rem",
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        width: "calc(50vw - 115px)",
      },
      backgroundColor: theme.palette.background.paper,
      maxWidth: "100vw",
    },
    "& .dialog-header": {
      color: "white",
      fontSize: "1.5rem",
      marginBottom: "3rem",
    },
  },
}));

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
      name: "first item",
      price: 200,
      quantity: 15,
    },
    {
      name: "second item",
      price: 400,
      quantity: 10,
    },
    {
      name: "third item",
      price: 500,
      quantity: 5,
    },
  ],
  paymentTerms: 3,
  projectDescriptoin: "first project",
};

interface Props {
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const InvoiceDialog: React.FC<Props> = ({
  isDialogOpen,
  openDialog,
  closeDialog,
}: Props) => {
  return (
    <StyledDialog open={isDialogOpen}>
      <header>
        <h2 className="dialog-header">Edit #lksjdf2</h2>
      </header>

      <CardContent sx={{ padding: "0rem" }}>
        <InvoiceForm
          invoice={invoice}
          handleCancelClicked={closeDialog}
          handleSaveClicked={openDialog}
        />
      </CardContent>
    </StyledDialog>
  );
};

export default InvoiceDialog;
