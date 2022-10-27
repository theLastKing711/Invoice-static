import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IInvoiceItem } from "../types";
import { calculatRowTotal } from "../helpers";
interface Props {
  items: IInvoiceItem[];
}

const InvoiceTableBodyDesktop = ({ items }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <TableRow key={item.id}>
          <TableCell
            component="th"
            scope="item"
            sx={{
              border: "none",
              fontSize: "1.2rem",
              color: "white",
              fontWeight: "bold",
              padding: "2rem",
            }}
          >
            {item.name}
          </TableCell>
          <TableCell
            align="center"
            sx={{
              border: "none",
              fontSize: "1.2rem",
              color: "white",
              fontWeight: "bold",
              padding: "2rem",
            }}
          >
            {item.quantity}
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "none",
              fontSize: "1.2rem",
              color: "white",
              fontWeight: "bold",
              padding: "2rem",
            }}
          >
            &euro; {item.price}
          </TableCell>
          <TableCell
            align="right"
            sx={{
              border: "none",
              fontSize: "1.2rem",
              color: "white",
              fontWeight: "bold",
              padding: "2rem",
            }}
          >
            &euro; {calculatRowTotal(item)}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default InvoiceTableBodyDesktop;
