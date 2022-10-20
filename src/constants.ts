import { IBillingStatus, IInvoice } from "./types";

export const invoicesList: IInvoice[] = [
  {
    id: "RT3080",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.PAID,
    totalPrice: 1800.9,
  },
  {
    id: "RT3081",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.PENDING,
    totalPrice: 1800.9,
  },
  {
    id: "RT3082",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.PAID,
    totalPrice: 1800.9,
  },
  {
    id: "RT3083",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.PENDING,
    totalPrice: 1800.9,
  },
  {
    id: "RT3084",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.PAID,
    totalPrice: 1800.9,
  },
  {
    id: "RT3085",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.DRAFT,
    totalPrice: 1800.9,
  },
  {
    id: "RT3087",
    owner: "Jensen Huang",
    date: "19 Aug 2021",
    billingStatus: IBillingStatus.DRAFT,
    totalPrice: 1800.9,
  },
];

export const statusColor = {
  [IBillingStatus.PAID]: {
    name: "Paid",
    color: "Orange",
  },
  [IBillingStatus.PENDING]: {
    name: "Pending",
    color: "LightBlue",
  },
  [IBillingStatus.DRAFT]: {
    name: "Draft",
    color: "white",
  },
};
