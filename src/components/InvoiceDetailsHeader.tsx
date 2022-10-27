import { Button, Theme, useTheme } from "@mui/material";
import styled from "styled-components";
import { IBillingStatus } from "../types";
import BillingStatusBadge from "./BillingStatusBadge";

const StyledHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.color};
  border-radius: 6px;

  .details-header {
    &__first-section {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    &__status-title {
      color: white;
    }

    &__second-section {
      display: flex;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

interface Props {
  theme: Theme;
  id: string;
  billingStats: Exclude<IBillingStatus, IBillingStatus.None>;
  handleEditClicked: () => void;
  handleDeleteClicked: (id: string) => void;
  handlePaidClicked: (id: string) => void;
}

const InvoiceDetailsHeader: React.FC<Props> = ({
  theme,
  id,
  billingStats,
  handleEditClicked,
  handleDeleteClicked,
  handlePaidClicked,
}: Props) => {
  const defaultBgColor = theme.palette.background.default;
  const meduimScreenWidth = theme.breakpoints.down("md");

  return (
    <StyledHeader color={defaultBgColor}>
      <div className="details-header__first-section">
        <label className="details-header__status-title">Status</label>
        <BillingStatusBadge billingStatus={billingStats} />
      </div>
      <div className="details-header__second-section">
        <Button
          variant="contained"
          color="secondary"
          sx={{
            [meduimScreenWidth]: {
              display: "none",
            },
          }}
          onClick={handleEditClicked}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            [meduimScreenWidth]: {
              display: "none",
            },
          }}
          onClick={() => handleDeleteClicked(id)}
        >
          Delete
        </Button>
        <Button variant="contained" onClick={() => handlePaidClicked(id)}>
          Mark as Paid
        </Button>
      </div>
    </StyledHeader>
  );
};

export default InvoiceDetailsHeader;
