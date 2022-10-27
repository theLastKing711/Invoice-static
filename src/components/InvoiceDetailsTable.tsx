import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IInvoiceItem } from "../types";
import { calculateTotal, calculatRowTotal } from "../helpers";
import { TableFooter } from "@mui/material";
import InvoiceTableBodyDesktop from "./InvoiceTableBodyDesktop";
import InvoiceTableBodyMobile from "./InvoiceTableBodyMobile";

interface Props {
  items: IInvoiceItem[];
  columnNames: string[];
  screenWidth: number | undefined;
}

export default function InvoiceDetailsTable({
  items,
  columnNames,
  screenWidth,
}: Props) {
  const meduimScreenSize = 899.95;

  const isScreenSizeMedium = (
    screenSize: number | undefined,
    meduimScreenSize: number
  ): boolean => {
    return screenSize != undefined && screenSize <= meduimScreenSize;
  };

  const isScreenGreaterThanMeduim = (
    screenSize: number | undefined,
    meduimScreenSize: number
  ): boolean => {
    return screenSize != undefined && screenSize > meduimScreenSize;
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "rgb(37, 41, 69)",
        padding: "0",
        marginTop: "1rem",
      }}
    >
      <Table
        sx={{
          minWidth: 400,
          border: "none",
          "& .MuiTableRow-head": {},
        }}
        aria-label="invoice items table"
      >
        {isScreenGreaterThanMeduim(screenWidth, meduimScreenSize) && (
          <TableHead>
            <TableRow sx={{ padding: "2rem !important" }}>
              <TableCell
                align="left"
                sx={{
                  border: "none",
                  fontSize: "1.1rem",
                  color: "#e2e2e2",
                  fontWeight: 300,
                  padding: "2rem",
                }}
              >
                {columnNames[0]}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  border: "none",
                  fontSize: "1.1rem",
                  color: "#e2e2e2",
                  fontWeight: 300,
                  padding: "2rem",
                }}
              >
                {columnNames[1]}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: "none",
                  fontSize: "1.1rem",
                  color: "#e2e2e2",
                  fontWeight: 300,
                  padding: "2rem",
                }}
              >
                {columnNames[2]}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: "none",
                  fontSize: "1.1rem",
                  color: "#e2e2e2",
                  fontWeight: 300,
                  padding: "2rem",
                }}
              >
                {columnNames[3]}
              </TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {isScreenGreaterThanMeduim(screenWidth, meduimScreenSize) && (
            <InvoiceTableBodyDesktop items={items} />
          )}
          {isScreenSizeMedium(screenWidth, meduimScreenSize) && (
            <InvoiceTableBodyMobile items={items} />
          )}
        </TableBody>
        <TableFooter sx={{ backgroundColor: "black" }}>
          <tr>
            <td colSpan={3} style={{ padding: "2rem" }}>
              <p style={{ color: "lightgray" }}>Amount Due</p>
            </td>
            <td style={{ textAlign: "right", padding: "2rem" }}>
              <p
                style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
              >
                &euro; {calculateTotal(items)}
              </p>
            </td>
          </tr>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
