
/**
 * New typescript file
 */

export class AlertResolveApi{
  constructor(
    
    public id:string,
    public clientName:string,
    public merchantName:string,
    public alertName: string, 
    public descriptor: string,
    public saleTransactionAmount:string,
    public alertDate:Date,
    public transactionDate:Date,
    public duplicate: string,
    public cardType:string,
    public chargebackStatus:string,
    public refundStatus:string,
    public chargebackAmount: string,
    public refundTransactionCurrency:string,
    public creditCardBin:string,
    public creditCardLastFour:string,
    public saleTransactionId:string,
    public assignedTo: string,
    //added
    public refundTransactionId:string,
    public outcome:string,
    public reason:string,
    public refundAmount:string,
    
    public notes:string,
    public alertStatus:string
    
  
  )
  {
    
  }
  
  
  
  
  
}