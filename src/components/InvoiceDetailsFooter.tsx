import { Button, Theme } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface Props {
  theme: Theme;
  id: string;
  handleEditClicked: () => void;
  handleDeleteClicked: (id: string) => void;
}

const StyledInvoiceFooter = styled.footer`
  margin-top: 1.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const InvoiceDetailsFooter: React.FC<Props> = ({
  theme,
  id,
  handleEditClicked,
  handleDeleteClicked,
}: Props) => {
  const defaultBgColor = theme.palette.background.default;

  return (
    <StyledInvoiceFooter color={defaultBgColor}>
      <Button variant="contained" color="secondary" onClick={handleEditClicked}>
        Edit
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleDeleteClicked(id)}
      >
        Delete
      </Button>
    </StyledInvoiceFooter>
  );
};

export default InvoiceDetailsFooter;
