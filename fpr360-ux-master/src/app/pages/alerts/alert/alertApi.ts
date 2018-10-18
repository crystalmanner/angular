
/**
 * New typescript file
 */
export class AlertApi{
  constructor(
    public id:string,
    public clientName:string,
    public merchantName:string,
    public alertName: string, 
    public descriptor: string,
    public transactionAmount:string,
    public alertDate:string,
    public transactionDate:string,
    public duplicate: string,
    public cardType:string,
    public status:string,
    public chargebackAmount: string,
    public saleTransactionCurrency:string,
    public creditCardBin:string,
    public creditCardLastFour:string,
    public saleTransactionId:string,
    public assignedTo: string
  
  )
  {
    
  }
  
  
  
  
  
}