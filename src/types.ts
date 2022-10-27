export enum IBillingStatus {
  None = 0,
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
  id: string;
  billFrom: IBillFrom;
  billTo: IBillTo;
  items: IInvoiceItem[];
  date: string;
  paymentTerms: number;
  projectDescription: string;
  isPaid: boolean;
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
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export interface IBillingOption {
  id: number;
  status: string;
}

export type InvoiceContextType = {
  invoices: IInvoiceForm[];
  invoiceStatusFilter: IBillingStatus;
  getInvoiceById: (id: string) => IInvoiceForm;
  addInvoice: (invoice: IInvoiceForm) => void;
  removeInvoice: (id: string) => void;
  updateInvoice: (invoice: IInvoiceForm) => void;
  markInvoicePaid: (id: string) => void;
  setInvoiceStatusFilter: (status: IBillingStatus) => void;
};


export interface IPaymentTermOption {
  id: number;
  value: string;
} 