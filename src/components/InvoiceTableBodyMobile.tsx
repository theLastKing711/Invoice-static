import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IInvoiceItem } from "../types";
import { calculatRowTotal } from "../helpers";
interface Props {
  items: IInvoiceItem[];
}

const InvoiceTableBodyMobile = ({ items }: Props) => {
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
              padding: "1rem",
            }}
            colSpan={2}
          >
            <div style={{ color: "white" }}>{item.name}</div>
            <div style={{ color: "lightgray" }}>
              {item.quantity} x &euro; {item.price}
            </div>
          </TableCell>
          <TableCell
            align="center"
            sx={{
              border: "none",
              fontSize: "1.2rem",
              color: "white",
              fontWeight: "bold",
              padding: "1rem",
            }}
            colSpan={2}
          >
            <div style={{ color: "white" }}>
              &euro; {calculatRowTotal(item)}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default InvoiceTableBodyMobile;
