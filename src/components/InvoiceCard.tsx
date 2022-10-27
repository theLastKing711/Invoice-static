import React from "react";
import styled from "styled-components";
import { IInvoice, IInvoiceForm, IInvoiceItem } from "../types";
import BillingStatusBadge from "./BillingStatusBadge";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Theme } from "@mui/material";
import { Link } from "react-router-dom";
import { calculateTotal, getBillingStatus } from "../helpers";

const StyledCard = styled.article`
  display: block;
  text-decoration: none;
  background-color: var(--bg-primary);
  border-radius: 6px;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  border: 1px solid transparent;

  transition: border-color 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.color};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: center;
  }

  .first-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.25rem;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      gap: 4rem;
      margin-bottom: 0;
      align-items: center;
    }
  }

  .second-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
      gap: 4rem;
    }
  }

  .date-price-container {
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
  }

  .invoice-card {
    font-size: 1.2rem;

    &__id {
      font-weight: 600;
    }

    &__id-hashtag {
      color: lightblue;
    }

    &__name {
      color: var(--text-secondary);
    }

    &__due-date {
      color: var(--text-secondary);
      margin-bottom: 0.5rem;

      @media screen and (min-width: 768px) {
        margin-bottom: 0;
        display: none;
      }

      &--desktop {
        display: none;

        @media screen and (min-width: 768px) {
          display: inline-block;
        }
      }
    }

    &__total-price {
      font-weight: bold;
      font-size: 1.4rem;
    }

    &__payment {
      @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    &__details-link {
      display: none;

      @media screen and (min-width: 768px) {
        display: inherit;
        background-color: transparent;
        color: var(--primary);
        border: none;
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  color: white;
`;

interface Props extends IInvoiceForm {
  theme: Theme;
  screenSize: number | undefined;
}

const InvoiceCard: React.FC<Props> = ({
  id,
  date,
  theme,
  billFrom,
  billTo,
  items,
  paymentTerms,
  projectDescription,
  isPaid,
  screenSize,
}: Props) => {
  const defaultBgColor: string = theme.palette.primary.main;

  const smallScreenWidth = 768;

  const IsScreenWidthSmall = (
    screenWidth: number | undefined,
    smallScreenWidth: number
  ): boolean => screenWidth != undefined && screenWidth <= smallScreenWidth;

  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <StyledCard className="invoice-card" color={defaultBgColor}>
        <div className="first-row">
          <div className="invoice-card__id">
            <span className="invoice-card__id-hashtag">#</span>
            {id}
          </div>
          <div className="invoice-card__due-date--desktop">Due {date}</div>
          <div className="invoice-card__owner"></div>
        </div>

        <div className="second-row">
          <div className="date-price-container">
            <div className="invoice-card__due-date">Due {date}</div>

            <div className="invoice-card__total-price">
              &euro;{calculateTotal(items)}
            </div>
          </div>

          <div className="invoice-card__payment">
            <BillingStatusBadge billingStatus={getBillingStatus(isPaid)} />

            {!IsScreenWidthSmall(screenSize, smallScreenWidth) && (
              <KeyboardArrowRightIcon
                style={{ color: theme.palette.primary.main }}
              />
            )}
          </div>
        </div>
      </StyledCard>
    </Link>
  );
};

export default InvoiceCard;
