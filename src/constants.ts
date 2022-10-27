import { IBillingStatus,  IInvoiceForm, IPaymentTermOption } from "./types";

export const invoicesList: IInvoiceForm[] = [
  {
    id: "345226",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "first client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 1
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 1
      },
    ],
  },
  {
    id: "345225",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "second client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 1
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 4
      },
    ]
  },
  {
    id: "345222",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "third client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 4
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 2
      },
    ]
  },
  {
    id: "345221",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "fourth client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 2
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 1
      },
    ]
  },
  {
    id: "345223",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "fifth client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 1
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 2
      },
    ]
  },
  {
    id: "345229",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "sixth client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 1
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 2
      },
    ]
  },
  {
    id: "3452324",
    date: "2/12/2022",
    paymentTerms: 0,
    projectDescription: "project description",
    isPaid: false,
    billFrom: {
      city: "Syria",
      country: "Damascus",
      postCode: "12131",
      streetAddress: "damscus street",
    },
    billTo: {
      city: "Syria",
      clientEmail: "test@gmail.com",
      clientName: "seventh client",
      country: "hama",
      postCode: "1231",
      streetAddress: "aleppo street",
    },
    items: [
      {
        id:  1,
        name: "first item",
        price: 300,
        quantity: 1
      },
      {
        id: 2,
        name: "second item",
        price: 500,
        quantity: 2
      },
    ]
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

export const defaultInvoice: IInvoiceForm = {
  id: "",
  date: "02/02/2022",
  items: [],
  paymentTerms: 0,
  projectDescription: "",
  isPaid: false,
  billFrom: {
    city: "",
    country: "",
    postCode: "",
    streetAddress: "",
  },
  billTo: {
    city: "",
    clientEmail: "",
    clientName: "",
    country: "",
    postCode: "",
    streetAddress: "",
  },
};

export const paymentTermOptions: IPaymentTermOption[] = [
  {
    id: 1,
    value: "Net 10 days"
  },
  {
    id: 2,
    value: "Net 20 days"
  },
  {
    id: 3,
    value: "Net 30 days"
  }
]