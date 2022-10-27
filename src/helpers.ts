import { IBillingStatus, IInvoiceItem } from "./types"

export const getBillingStatus = (isPaid: boolean ): Exclude<IBillingStatus, IBillingStatus.None> => {

   if(isPaid) 
   {
    return IBillingStatus.PAID;
   }
   else {
    return IBillingStatus.PENDING;
   }  
}


const totalCallBack = (prev: number, curr: IInvoiceItem): number => {
   return prev + curr.price * curr.quantity;
 };

export  const calculateTotal = (items: IInvoiceItem[]): number => {
   return items.reduce(totalCallBack, 0);
 };

 export const calculatRowTotal = (item: IInvoiceItem): number => {
   return item.quantity * item.price;
 }