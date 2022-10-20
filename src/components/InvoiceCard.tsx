import React from "react";
import styled from "styled-components";
import { IInvoice } from "../types";
import BillingStatusBadge from "./BillingStatusBadge";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Theme } from "@mui/material";

const StyledCard = styled.a`
  display: block;
  text-decoration: none;
  background-color: var(--bg-primary);
  border-radius: 6px;
  margin-bottom: 1.5rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  border: 1px solid transparent;

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

interface Props extends IInvoice {
  theme: Theme;
}

const InvoiceCard: React.FC<Props> = ({
  id,
  billingStatus,
  date,
  owner,
  totalPrice,
  theme,
}: Props) => {
  const defaultBgColor: string = theme.palette.primary.main;

  return (
    <StyledCard className="invoice-card" color={defaultBgColor} href={`/:id`}>
      <div className="first-row">
        <div className="invoice-card__id">
          <span className="invoice-card__id-hashtag">#</span>
          {id}
        </div>
        <div className="invoice-card__due-date--desktop">Due {date}</div>
        <div className="invoice-card__owner">{owner}</div>
      </div>

      <div className="second-row">
        <div className="date-price-container">
          <div className="invoice-card__due-date">Due {date}</div>

          <div className="invoice-card__total-price">&euro;{totalPrice}</div>
        </div>

        <div className="invoice-card__payment">
          <BillingStatusBadge
            billingStatus={billingStatus}
          ></BillingStatusBadge>
          <a
            className="invoice-card__details-link"
            aria-label="invoice details"
            href={`/${id}`}
          >
            <KeyboardArrowRightIcon
              style={{ color: theme.palette.primary.main }}
            />
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

export default InvoiceCard;
