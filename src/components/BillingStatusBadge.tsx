import React from "react";
import styled from "styled-components";
import { statusColor } from "../constants";
import { IBillingStatus } from "../types";

const StyledBadge = styled.div`
  background-color: rgb(31, 43, 61);
  width: 125px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2px;
  color: ${(props) => props.color};

  .badge-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;

interface Props {
  billingStatus: Exclude<IBillingStatus, IBillingStatus.None>;
}

const BillingStatusBadge: React.FC<Props> = ({ billingStatus }) => {
  const badgeColor = statusColor[billingStatus].color;
  const statusName = statusColor[billingStatus].name;

  return (
    <StyledBadge color={badgeColor}>
      <div className="badge-circle"></div>
      {statusName}
    </StyledBadge>
  );
};

export default BillingStatusBadge;
