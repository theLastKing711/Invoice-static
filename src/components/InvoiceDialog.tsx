import Dialog, { DialogProps } from "@mui/material/Dialog";
import { CardContent } from "@mui/material";
import { styled as materialStyled } from "@mui/material/styles";
import { Dayjs } from "dayjs";
import InvoiceForm from "./InvoiceForm";
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

interface Props {
  isDialogOpen: boolean;
  children?: React.ReactNode;
  title: string;
}

const InvoiceDialog: React.FC<Props> = ({
  isDialogOpen,
  title,
  children,
}: Props) => {
  return (
    <StyledDialog open={isDialogOpen}>
      <header>
        <h2 className="dialog-header">{title}</h2>
      </header>

      <CardContent sx={{ padding: "0rem" }}>{children}</CardContent>
    </StyledDialog>
  );
};

export default InvoiceDialog;
