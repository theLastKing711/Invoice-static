import { Button, MenuItem, Menu, Theme, useTheme } from "@mui/material";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IBillingOption } from "../types";
import React from "react";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 4rem;

  @media screen and (min-width: 415px) {
    flex-direction: row;
  }

  .invoices-header {
    &__title {
      margin-bottom: 0.5rem;
    }

    &__total {
      color: lightgray;
    }

    &__filter {
      display: flex;
      gap: 0.5rem;
    }

    &__filter-button {
      cursor: pointer;
      border: none;
      width: auto;
      height: auto;
      background-color: transparent;
      margin-top: -0.25rem;
    }
  }

  .add-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: white;
    font-size: 2rem;
    margin-right: 1.25rem;
  }

  .second-section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

interface Props {
  screenWidth: number | undefined;
  isFilterMenuOpen: boolean;
  BillingStatusOptions: IBillingOption[];
  handleFilterButtonToggled: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleFilterItemSelected: (id: number) => void;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handleNewInvoiceClicked: () => void;
}

const smallScreenWidth = 768;

const InvoiceHeader: React.FC<Props> = ({
  screenWidth,
  handleFilterButtonToggled,
  isFilterMenuOpen,
  BillingStatusOptions,
  anchorEl,
  setAnchorEl,
  handleFilterItemSelected,
  handleNewInvoiceClicked,
}: Props) => {
  const theme: Theme = useTheme();

  const IsScreenWidthSmall = (
    screenWidth: number | undefined,
    smallScreenWidth: number
  ): boolean => screenWidth != undefined && screenWidth <= smallScreenWidth;

  const getInvoicesText = (
    screenWidth: number | undefined,
    smallScreenWidth: number,
    invoicesCount: number
  ): string => {
    if (IsScreenWidthSmall(screenWidth, smallScreenWidth)) {
      return `${invoicesCount} Invoices`;
    } else {
      return `There are ${invoicesCount} Invoices`;
    }
  };

  const getNewInvoiceButtonText = (
    screenWidth: number | undefined,
    smallScreenWidth: number
  ): string => {
    if (IsScreenWidthSmall(screenWidth, smallScreenWidth)) {
      return "New";
    } else {
      return "New Invoice";
    }
  };

  const getFilterText = (
    screenWidth: number | undefined,
    smallScreenWidth: number
  ): string => {
    if (IsScreenWidthSmall(screenWidth, smallScreenWidth)) {
      return "Filter";
    } else {
      return "Filter by status";
    }
  };

  return (
    <StyledHeader className="invoices-header">
      <div className="first-section">
        <h1 className="invoices-header__title">Invoices</h1>
        <p className="invoices-header__total">
          {getInvoicesText(screenWidth, smallScreenWidth, 7)}
        </p>
      </div>
      <div className="second-section">
        <div className="invoices-header__filter">
          <label htmlFor="filter-button">
            {getFilterText(screenWidth, smallScreenWidth)}
          </label>
          <button
            aria-label="filter invoices by billing status"
            className="invoices-header__filter-button"
            id="filter-button"
            onClick={handleFilterButtonToggled}
          >
            <KeyboardArrowDownIcon
              style={{ color: theme.palette.primary.main }}
            />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isFilterMenuOpen}
            onClose={() => {}}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {BillingStatusOptions.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => handleFilterItemSelected(item.id)}
              >
                {item.status}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "1000px",
            padding: "0.5rem 1.25rem 0.5rem 0.5rem",
          }}
          onClick={handleNewInvoiceClicked}
        >
          <div
            className="add-circle"
            style={{ color: theme.palette.primary.main }}
          >
            +
          </div>
          <div
            className="add-invoice-title"
            style={{ fontSize: "1rem", textTransform: "none" }}
          >
            {getNewInvoiceButtonText(screenWidth, smallScreenWidth)}
          </div>
        </Button>
      </div>
    </StyledHeader>
  );
};

export default InvoiceHeader;
