export enum IBillingStatus {
  PAID = 1,
  PENDING = 2,
  DRAFT = 3,
}

export interface IInvoice {
  id: string;
  owner: string;
  date: string;
  totalPrice: number;
  billingStatus: IBillingStatus;
}

export interface IInvoiceForm {
  billFrom: IBillFrom;
  billTo: IBillTo;
  items: IInvoiceItem[];
  date: string;
  paymentTerms: number;
  projectDescriptoin: string;
}

export interface IBillFrom {
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
}

export interface IBillTo {
  clientName: string;
  clientEmail: string;
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
}

export interface IInvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

export interface IBillingOption {
  id: number;
  status: string;
}
