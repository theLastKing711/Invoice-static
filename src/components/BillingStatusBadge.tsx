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
  border-radius: 2px;
`;

interface Props {
  billingStatus: IBillingStatus;
}

const BillingStatusBadge: React.FC<Props> = ({ billingStatus }) => {
  const badgeColor = statusColor[billingStatus].color;
  const statusName = statusColor[billingStatus].name;

  return <StyledBadge style={{ color: badgeColor }}>{statusName}</StyledBadge>;
};

export default BillingStatusBadge;
