
/**
 * New typescript file
 */
export class AlertsApi {
  constructor(public id:string,
    public clientName:string,
    public merchantName:string,
    public alertName: string, 
    public descriptor: string,
    public transactionAmount:number,
    public alertDate:string,
    public transactionDate:string,
    public duplicate: boolean,
    public cardType:string,
    public status:string,
    public chargebackAmount: number,
    public saleTransactionCurrency:string,
    public creditCardBin:string,
    public creditCardLastFour:string,
    public saleTransactionId:string,
    public assignedTo: string,
    public externalMerchantId:string,
    public statusName:string,
    public alertProviderIssuerId:string
  
  )
  {
    
  }
  
  
}