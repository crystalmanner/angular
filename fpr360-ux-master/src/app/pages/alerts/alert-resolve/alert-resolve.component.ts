
import { AlertResolveApi } from "./alertResolveApi";
import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertReasonService } from './alertsReason.service'; //service
import { AlertReason } from './alertReasonApi';  //service
import { environment } from '../../../../environments/environment';


const createCurrencyMask = (opts = {}) => {
  const decimalsRegex = /\.([0-9]{1,2})/;
  const numberMask = createNumberMask({
    prefix: '$',
    includeThousandsSeparator: true,
    allowDecimal: true,
    requireDecimal: true,
    allowLeadingZeroes: false,
    ...opts
  });
  return rawValue => {
    const mask = numberMask(rawValue);
    const result = decimalsRegex.exec(rawValue);

    // In case there is only one decimal
    if (result && result[1].length < 2) {
      mask.push('0');
    } else if (!result) {
      mask.push('0');
      mask.push('0');
    }
    return mask;
  };
};
@Component({
  selector: 'app-alert-resolve',
  templateUrl: './alert-resolve.component.html',
  styleUrls: ['./alert-resolve.component.scss']
})
export class AlertResolveComponent implements OnInit {
  alertDate: any;
  salDate: any;
  salAmount: any;
  alerDate: any;
  disputAmount: any;
  alertId:any;



  alert: {company: {name: string;}; status: {name: string;};users: {name: string; position: string; avatar: string; url: string;}[];  alertInfo: {provider: {label: string; value: string;}; idNumber: {label: string; value: string;}; card: {label: string; value: string;}; timestamp: {label: string; value: string;};}; transactionInfo: {merchant: {label: string; value: string;}; cardBin: {label: string; value: string;}; cc: {label: string; value: string;}; transactionId: {label: string; value: string;}; descriptor: {label: string; value: string;};}; refund: {status: string; disputeAmount: string; refundDate: string;}; chargeback: {status: string; disputeAmount: string; saleDate: string;}; actionSteps: {credit: boolean; recuring: boolean; blacklist: boolean;}; resolutionReport: {saleTransactionId: string; refundTransactionId: string; refundAmount: string; notes: string; outcome: {value: string; options: {value: string; viewValue: string;}[];}; reason: {value: string; options: {value: string; viewValue: string;}[];};};};
  alertDataLine: {label: string; value: any; error: boolean;}[];
  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });

  

  
  
  public cardBinMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // 6 digits

  public ccMask = [/\d/, /\d/, /\d/, /\d/]; // 4 digits

  public idMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // 9 digits

  openRefundBlock = false;
  openRsolveBlock = false;

  readonly = false;
 dataArray:any;
 splittedArray:any[];
  
  
  isDataAvail:boolean = false;
    passedData:string='';
  isParamAvailable = false;
   
 
  constructor(private route :ActivatedRoute,private router:Router, private http:Http,private alReasonService: AlertReasonService) {
 route.queryParams.subscribe(
 
  data => {let testdata = data['param'];
     this.isParamAvailable = true;
  
     this.dataArray = testdata;
     this.router.navigate(['/alerts/alert-resolve']);
     this.stayHere();
  })
  
  }

  ngOnInit() {
    this.getOutcomeReasons();
  }
  
  
  timeConverter(UNIX_timestamp){
  let a = new Date(parseInt(UNIX_timestamp));
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
  let sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}
  
   dateConverter(UNIX_timestamp){
  let a = new Date(parseInt(UNIX_timestamp));
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  //let hour = a.getHours();
  //let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
  //let sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
  let time = date + ' ' + month + ' ' + year ;
  return time;
}
  
 parseMillisecondsIntoReadableTime(milliseconds){
  //Get hours from milliseconds
  let hours = milliseconds / (1000*60*60);
  let absoluteHours = Math.floor(hours);
  let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  //Get remainder from hours and convert to minutes
  let minutes = (hours - absoluteHours) * 60;
  let absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

  //Get remainder from minutes and convert to seconds
  let seconds = (minutes - absoluteMinutes) * 60;
  let absoluteSeconds = Math.floor(seconds);
  let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;


  return h + ':' + m + ':' + s;
}
  
  
    
stayHere(){
  if (this.isParamAvailable && this.dataArray != null) {
   // console.log('dataloaded>>'+this.passedData);
    this.splittedArray = this.dataArray.split(',');
    this.disputAmount = this.splittedArray[12];
    this.alerDate = this.splittedArray[8];
    this.salAmount = this.splittedArray[2];
    this.salDate = this.splittedArray[9];
    this.alertId = this.splittedArray[7];

   let  milliseconds = (new Date).getTime();
    
    let diff = milliseconds - parseInt(this.splittedArray[8])
    
    
    
    
    let timeStamp = this.timeConverter(this.splittedArray[8]);

    
    
   this.alertDataLine = [
    {
      label: 'Dispute Amount',
       value: '$ '+this.disputAmount,
       error: false
    },
    {
      label: 'Alert Date',
      
      value: this.dateConverter(this.splittedArray[8]),
      error: false
    },
    {
      label: 'Sale Amount',
      value: '$ '+this.salAmount,
      error: false
    },
    {
      label: 'Sale Date',
     value: this.salDate,
      error: false
    },
    {
      label: 'Time Remaining',
      value: this.parseMillisecondsIntoReadableTime(diff),
      error: true
    }
  ];
    
    
    this.alert = {
    company: {
     
      name: this.splittedArray[1]
    },
      status: {
   
      name: this.splittedArray[13]
    },
    users: [
      {
        name: 'Erik Richards',
        position: 'Chargeback Analyst',
        avatar: 'assets/images/user.png',
        url: '/profile/details'
      },
      {
        name: 'Sandra Tullio',
        position: 'Follow Up Lead',
        avatar: 'assets/images/user3.png',
        url: '/profile/details'
      }
    ],
    //settings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
    alertInfo: {
      provider: {
        label: 'Provider',
       
        value: this.splittedArray[6]
      },
      idNumber: {
        label: 'ID Number',
     
        //value: this.splittedArray[7]
        value: this.splittedArray[14]
      },
      card: {
        label: 'Card Type',
        
        value: this.splittedArray[10]
      },
      timestamp: {
        label: 'Timestamp',
        //value: 'May 1, 2018 8:00AM EST'
        
        
        value: timeStamp,
      }
    },
    transactionInfo: {
      merchant: {
        label: 'Merchant',
       // value: 'Shop Nutra LLC'
        value: this.splittedArray[5]
      },
      cardBin: {
        label: 'Card Bin',
       // value: '648284'
        value: this.splittedArray[3]
      },
      cc: {
        label: 'CC Last 4 Digits',
        //value: '6485'
        value:this.splittedArray[4]
      },
      transactionId: {
        label: 'Transaction ID',
       // value: '164382826483'
        value:this.splittedArray[11]
      },
      descriptor: {
        label: 'Descriptor',
        //value: 'DEVINEEYE8887137910'
        value:this.splittedArray[0],
      }
    },
    refund: {
      status: 'Issued',
      disputeAmount: '$ '+this.splittedArray[12],
      refundDate: 'April 28, 2018'
    },
    chargeback: {
      status: 'Dispute Filled',
      disputeAmount: '$ '+this.splittedArray[12],
      saleDate: 'April 28, 2018'
    },
    actionSteps: {
      credit: true,
      recuring: true,
      blacklist: true
    },
    resolutionReport: {
      saleTransactionId: this.splittedArray[11],
      refundTransactionId: '',
      refundAmount: '$ '+this.splittedArray[12],
      notes: '',
      outcome: {
        value: '',
        options: [
          
          {
            value: 'Declined',
            viewValue: ''
          },
          {
            value: 'Resolved',
            viewValue: ''
          }
        ]
      },
      reason: {
        value: 'Resolved',
        options: [
          {
            value: 'Resolved',
            viewValue: 'Resolve'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          },{
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      }
    }
  };
    
}
  }


 
  
  
 public dreasons: {
 value: string;
 viewValue: string;
 }[]=[];
  public rreasons: {
 value: string;
 viewValue: string;
 }[]=[];
  public reasons: {
 value: string;
 viewValue: string;
 }[]=[];
selectedReason :any;

  public allOutcomeReasons:AlertReason[] =[];
public getOutcomeReasons() {
  
  this.alReasonService.getAllOutcomeReasons().subscribe((data:AlertReason[]) => 
  {
    this.allOutcomeReasons = data;
    
   for (let i of this.allOutcomeReasons ){
     
   if(this.alert.alertInfo.provider.value == i.alertSource && i.outcomeValue == 'DECLINED'){ 
     
   
      this.alert.resolutionReport.outcome.options[0].viewValue = 'Declined' 
     this.alert.resolutionReport.outcome.options[0].value = 'Declined' 
        console.log("dec"+i.reasonValue);
      
   
     let y = {'value':i.reasonValue,'viewValue':i.reasonValue};
       this.dreasons.push(y);
       
    
  
   } else if (this.alert.alertInfo.provider.value == i.alertSource && i.outcomeValue == 'RESOLVED'){
     
     this.alert.resolutionReport.outcome.options[1].viewValue = 'Resolved'
      this.alert.resolutionReport.outcome.options[1].value = 'Resolved'
       console.log("res"+i.reasonValue);
    
        let x = {'value':i.reasonValue,'viewValue':i.reasonValue};
     
       this.rreasons.push(x); 
   
   

    }
    }
    this.reasons = [...this.reasons ,...this.dreasons ,...this.rreasons];
    console.log("length>>"+this.reasons+ this.dreasons.toString+this.rreasons.toString);
  })
  
  
     
  
} 
 
 
 

  apiUrl = environment.alertAddUrlLocal;
  
public postAlert(id,outcome,reason,notes,refuAmount,refuTransId,saleTransId):Observable<AlertResolveApi>{
  var date = '2017-11-27T09:10:00';
  var time = new Date(date);
   
  let alertUpdate = new AlertResolveApi(id,"","test1","","","",time,time,"","vv","","","","","","",saleTransId,"",refuTransId,outcome,reason,refuAmount,notes,"Resolved");
 
   let headers = new Headers({ 'Content-Type': 'application/json'});
   headers.append("Access-Control-Max-Age", "3600");

   headers.append("Authorization", "Basic " + btoa("mesele"+":"+"mesele")); 

   headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
   headers.append('Access-Control-Allow-Origin', 'http://fpr360api-alert.us-east-2.elasticbeanstalk.com');
      
      let options = new RequestOptions({ headers: headers });
 
     let body = JSON.stringify(alertUpdate);
 // this.alertId = 
     //console.log(body);

      return this.http.post(this.apiUrl+this.alertId, body, options).map(this.extractData)
    .catch(this.handleError);
   
  }
  
    private extractData(res: Response) {
      console.log(">>>response>>"+res.status)
      let body = res.json;
      //console.log("serviceResponse >>"+body);
      return body;
   
      
    }
    private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }
 
 public updateAlert(id,outcome,reason,notes,refuAmount,refuTransId,saleTransId){

    this.postAlert(id,outcome,reason,notes,refuAmount,refuTransId,saleTransId).subscribe((data) => {let dat=data;   
   
     })
  }
 

  cards = [
    {
      value: 'VISA',
      viewValue: 'VISA'
    },
    {
      value: 'MC',
      viewValue: 'MC'
    },
    {
      value: 'AmEx',
      viewValue: 'AmEx'
    }
  ];

   
   

  selectSettings = val => console.log(val);

  backDate = date => console.log(date);

  cardTypeChange = val => console.log(val);
}
