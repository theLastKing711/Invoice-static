import { Grid, Theme, ThemeCssVar, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledDetailsContent = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.color};
  margin-top: 1.125rem;
  border-radius: 6px;

  .sub-title {
    font-size: 1rem;
    font-weight: 300;
    color: white;
  }

  .main-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }

  .main-margin {
    margin-bottom: 0.5rem;
  }

  .sub-margin {
    margin-bottom: 0.25rem;
  }

  .invoice-details-content {
    &__bill-from,
    &__id-section,
    &__invoice-date,
    &__payment,
    &__sent-to {
      margin-bottom: 1.75rem;
    }
  }
`;

interface Props {
  theme: Theme;
}

const InvoiceDetailsContent: React.FC<Props> = ({ theme }) => {
  const defaultBgColor = theme.palette.background.default;
  const smallScreenSize: string = theme.breakpoints.down("sm");

  return (
    <StyledDetailsContent color={defaultBgColor}>
      <Grid container>
        <Grid
          xs={12}
          item
          container
          className="invoice-details-content__first-section"
        >
          <Grid
            md={6}
            item
            container
            className="invoice-details-content__id-section"
            flexDirection="column"
            sx={{
              [smallScreenSize]: {
                alignItems: "center",
              },
            }}
          >
            <div className="invoice-details-content__rebranding-title main-title main-margin">
              #RT308
            </div>
            <div className="invoice-details-content__address sub-title">
              Re-branding
            </div>
          </Grid>
          <Grid
            item
            container
            md={6}
            className="invoice-details-content__bill-from"
            flexDirection="column"
            sx={{
              alignItems: "flex-end",
              [smallScreenSize]: {
                alignItems: "center",
              },
            }}
          >
            <div
              className="invoice-details-content__bill-from-street-address sub-title sub-margin"
              sub-margin
            >
              19 Union Terrace
            </div>
            <div className="invoice-details-content__bill-from-country sub-title sub-margin">
              London
            </div>
            <div className="invoice-details-content__bill-from-postal-code sub-title sub-margin">
              E13EZ
            </div>
            <div className="invoice-details-content__bill-from-city sub-title sub-margin">
              United Kingdom
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          className="invoice-details-content__second-section"
        >
          <Grid
            item
            container
            flexDirection="column"
            sm={6}
            md={4}
            className="invoice-details-content__date-section"
            sx={{
              [smallScreenSize]: {
                alignItems: "center",
              },
            }}
          >
            <div className="invoice-details-content__invoice-date">
              <div className="invoice-details-content__invoice-date-title sub-title main-margin">
                Invoice Date
              </div>
              <div className="invoice-details-content__invoice-date-date main-title">
                18 Aug 2021
              </div>
            </div>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            sm={6}
            md={4}
            className="invoice-details-content__payment"
            sx={{
              [smallScreenSize]: {
                alignItems: "center",
              },
            }}
          >
            <div className="invoice-details-content__bill-to-title sub-title main-margin">
              Bill To
            </div>
            <div className="invoice-details-content__bill-to-owner main-title main-margin">
              Jensen Huang
            </div>
            <div className="invoice-details-content__bill-to-street-address sub-title sub-margin">
              106 Kendell Street
            </div>
            <div className="invoice-details-content__bill-to-city sub-title sub-margin">
              Sharringun
            </div>
            <div className="invoice-details-content__bill-to-postal-code sub-title sub-title sub-margin">
              NR245WQ
            </div>
            <div className="invoice-details-content-bill-to-country sub-title">
              United Kingdom
            </div>
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            sm={6}
            md={4}
            className="invoice-details-content__sent-to"
            sx={{
              [smallScreenSize]: {
                alignItems: "center",
              },
            }}
          >
            <div className="invoice-details-content__sent-to-title sub-title main-margin">
              Sent To
            </div>
            <div className="invoice-details-content__sent-to-email-value main-title">
              jensenh@mail.com
            </div>
          </Grid>
        </Grid>
      </Grid>
    </StyledDetailsContent>
  );
};

export default InvoiceDetailsContent;
