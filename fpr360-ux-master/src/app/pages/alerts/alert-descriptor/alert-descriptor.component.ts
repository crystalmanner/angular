import { Component, OnInit, ViewChild } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettingsDialogComponent } from '../../../dialogs/table-settings-dialog/table-settings-dialog.component';
import { AlertReason } from "../alert-resolve/alertReasonApi";

import { ActivatedRoute, Router } from "@angular/router";
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { AlertReasonService } from '../alert-resolve/alertsReason.service'; //service
import { AlertDescriptorService } from "../alert-descriptor/alert-descriptor-service";
import { AlertResolveApi } from "../alert-resolve/alertResolveApi";
import { AlertDescriptorApi } from "../alert-descriptor/alert-descriptor-api";
import { FormControl, Validators } from "@angular/forms";
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
  selector: 'app-alert-descriptor',
  templateUrl: './alert-descriptor.component.html',
  styleUrls: ['./alert-descriptor.component.scss']
})
export class AlertDescriptorComponent implements OnInit {
  merchantControl = new FormControl('', [Validators.required]);
  decscriptorParam: any;
  alertDate: any;
  alerDate: any;
  alertId: any;
  flagmerchant = true;
  alert: {company: {name: any}; status: {name: any;}; users: {name: string; position: string; avatar: string; url: string;}[];  alertInfo: {provider: {label: string; value: any;}; idNumber: {label: string; value: any;}; card: {label: string; value: any;}; timestamp: {label: string; value: any;};clientOptions: {label: string; value: any;};merchantOptions: {label: string; value: any;}}; transactionInfo: {merchant: {label: string; value: any;}; cardBin: {label: string; value: any;}; cc: {label: string; value: any;}; transactionId: {label: string; value: any;}; descriptor: {label: string; value: any;};}; refund: {status: string; disputeAmount: string; refundDate: string;}; chargeback: {status: string; disputeAmount: string; saleDate: string;}; actionSteps: {credit: boolean; recuring: boolean; blacklist: boolean;}; resolutionReport: {saleTransactionId: string; refundTransactionId: string; refundAmount: string; notes: string; outcome: {value: string; options: {value: string; viewValue: string;}[];}; reason: {value: string; options: {value: string; viewValue: string;}[];};};};

  alertDataLine: {label: string; value: string; error: boolean;}[];
  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });

  public cardBinMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // 6 digits

  public ccMask = [/\d/, /\d/, /\d/, /\d/]; // 4 digits

  public idMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // 9 digits

  readonly = false;
  
  
   openRefundBlock = false;
   openRsolveBlock = false;
  
  dataArray:any;
 splittedArray:any[];
  
  
  isDataAvail:boolean = false;
    passedData:string='';
  isParamAvailable = false;
   
 
  constructor(public dialog: MatDialog,private route :ActivatedRoute,private router:Router, private http:Http,private alReasonService: AlertReasonService,private alDescriptorService: AlertDescriptorService) {
 route.queryParams.subscribe(
 
  data => {let testdata = data['param'];
     this.isParamAvailable = true;
    //this.dataArray = this.passedData.split(',');
     this.dataArray = testdata;
     this.router.navigate(['/alerts/alert-descriptor']);
     this.stayHere();
  })
  
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
    this.alertId = this.splittedArray[7];
   this.alerDate = this.splittedArray[8];
    this.decscriptorParam= this.splittedArray[0];
   // let companyName:any;
  // this.alertDate = (new Date(this.alerDate)).toDateString();
   
    if (this.decscriptorParam != '' && this.decscriptorParam != null && this.flagmerchant) {
      this.getMerchantsClients()
      this.flagmerchant = false;
    };
     let companyName = this.clientOptions[0] != null ? this.clientOptions[0] :this.splittedArray[0];
    
     let  milliseconds = (new Date).getTime();
    
    let diff = milliseconds - parseInt(this.splittedArray[8])
    let timeStamp = this.timeConverter(this.splittedArray[8]);
  console.log("::splittedarray::"+this.splittedArray);

  this.alertDataLine = [
    {
      label: 'Dispute Amount',
      value: '$ '+this.splittedArray[12],
      error: false
    },
    {
      label: 'Alert Date',
      value: this.dateConverter(this.splittedArray[8]),
      error: false
    },
    {
      label: 'Sale Amount',
      value: '$ '+this.splittedArray[2],
      error: false
    },
    {
      label: 'Sale Date',
      value: this.splittedArray[9],
      error: false
    },
    {
      label: 'Time Remaining',
     // value: '12hrs 8min',
      value: this.parseMillisecondsIntoReadableTime(diff),
      error: true
    }
  ];

   this.alert = {
    company: {
    
      name: companyName
      
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
  //  settings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
    alertInfo: {
      provider: {
        label: 'Provider',
        //value: 'Verifi'
        value: this.splittedArray[6]
      },
      idNumber: {
        label: 'ID Number',
      //value: this.splittedArray[7]
        value: this.splittedArray[14]
      },
      card: {
        label: 'Card Type',
        //value: 'VISA'
        value: this.splittedArray[10]
      },
      timestamp: {
       label: 'Timestamp',
        //value: 'May 1, 2018 8:00AM EST'
       value: timeStamp
      },
      clientOptions:{
        label:'Client',
        value:''
      },
        merchantOptions:{
        label:'Merchant',
        value:''
      }
    },
    transactionInfo: {
      merchant: {
        label: 'Merchant',
       // value: 'Shop Nutra LLC'
        value: this.splittedArray[5],
        
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
      notes:'',
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
        value: '',
        options: [
          {
            value: 'Resolved',
            viewValue: 'Resolved'
          },
          {
            value: 'Option 2',
            viewValue: 'Option 2'
          },
          {
            value: 'Option 3',
            viewValue: 'Option 3'
          }
        ]
      }
    }
  };
    
}
  }
    
    
public allOutcomeReasons:AlertReason[] =[];
public allMerchantsClients:AlertDescriptorApi[]=[];


  
 public outcomes: {
 value: string;
 viewValue: string;
 }[]= [];
  
  
 
  
   public dreasons: {
 value: any;
 viewValue: any;
 }[]=[];
  
   public clientOptions: {
 value: any;
 viewValue: any;
 }[]=[];
  
 public merchantOptions: {
 value: any;
 viewValue: any;
 }[]=[];
  
  selectedReason :any;
     
   // outcometest: {value: ''; options: {value: string; viewValue: string;}[];}
     
     
  public rreasons: {
 value: any;
 viewValue: any;
 }[]=[];
  public reasons: {
 value: any;
 viewValue: any;
 }[]=[];
  


 
public getOutcomeReasons(){
  
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
    console.log("length>>"+this.reasons.length + this.dreasons.length +this.rreasons.length);
  })
    
  }
    
public getMerchantsClients() {
  
  this.alDescriptorService.getAllMerchantsClients(this.decscriptorParam).subscribe((data:AlertDescriptorApi[])=> {
    
this.allMerchantsClients = data;
    
     for (let i of this.allMerchantsClients ){
     
  
      let y = {'value':i.clientName,'viewValue':i.clientName};
     
       this.clientOptions.push(y);
       
        let x = {'value':i.merchantId,'viewValue':i.merchantName};
     
       this.merchantOptions.push(x); 
   
    }  

}) 
}
    
apiUrl = environment.alertAddUrlLocal;
    

  
public postAlert(id,outcome,reason,notes,refuAmount,refuTransId,saleTransId,merchantId):Observable<AlertResolveApi>{
  var date = '2017-11-27T09:10:00';
  var time = new Date(date);
   
  let alertUpdate = new AlertResolveApi(id,"",merchantId,"","","",time,time,"true","vv","","","","","","",saleTransId,"",refuTransId,outcome,reason,refuAmount,notes,"Resolved");
 
   let headers = new Headers({ 'Content-Type': 'application/json'});
   headers.append("Access-Control-Max-Age", "3600");

   headers.append("Authorization", "Basic " + btoa("mesele"+":"+"mesele")); 

   headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
   headers.append('Access-Control-Allow-Origin', 'http://fpr360api-alert.us-east-2.elasticbeanstalk.com');
      
      let options = new RequestOptions({ headers: headers });
 
     let body = JSON.stringify(alertUpdate);
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
 
 public updateAlert(id,outcome,reason,notes,refuAmount,refuTransId,saleTransId,merchantSelected,clientSelected){
     console.log("::merchant/client::"+merchantSelected+"::"+clientSelected);
    this.postAlert(id,outcome,reason,notes,refuAmount,refuTransId,saleTransId,merchantSelected).subscribe((data) => {let dat=data;   
   
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
  duplivates = {
    rows: [
      {
        provider: 'Verifi',
        merchant: 'Filter Forge Inc.',
        timestamp: 'Dec 12, 2017 5:34pm',
        saleDate: 'Oct 2, 2017',
        amount: '$89.85',
        ccBin: '573829',
        ccLast4: '8765',
        disputeAmount: '$89.95'
      },
      {
        provider: 'Verifi',
        merchant: 'Filter Forge Inc.',
        timestamp: 'Dec 12, 2017 5:34pm',
        saleDate: 'Oct 2, 2017',
        amount: '$89.85',
        ccBin: '573829',
        ccLast4: '8765',
        disputeAmount: '$89.95'
      }
    ],
    cols: [
      { prop: 'provider' },
      { name: 'Provider' },
      { name: 'Merchant' },
      { name: 'Timestamp' },
      { name: 'Sale Date' },
      { name: 'Amount' },
      { name: 'CC Bin' },
      { name: 'CC Last4' },
      { name: 'Dispute Amount' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Provider',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Merchant',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Timestamp',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Sale Date',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Amount',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'CC Bin',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'CC Last4',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Dispute Amount',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        }
      ]
    }
  };
    
 
  

  globalTableSettings = ['Manage Columns', 'divider', 'Restore Default'];

  temp = [];

  colTemp = [];



  ngOnInit() {
    this.temp = [...this.duplivates.rows];
    this.getOutcomeReasons();
  }

  selectSettings = val => console.log(val);

  backDate = date => console.log(date);
  //for duplicate table
  removeRow = index => {
    this.duplivates.rows.splice(index, 1);
  };

  selectGlobalTableSettings = val => {
    switch (val) {
      case 'Manage Columns': {
        const dialogRef = this.dialog.open(TableSettingsDialogComponent, {
          data: {
            dataArray: this.duplivates.addidionalData.colsData
          },
          autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            const temp = result.filter(function(d) {
              return d.included !== -1 || !val;
            });
            this.duplivates.addidionalData.colsData = temp;
            this.table.offset = 0;
          }
        });
        break;
      }
      case 'Restore Default':
        for (let item of this.duplivates.addidionalData.colsData) {
          item.included = true;
        }
        break;
      default:
        break;
    }
  };

  @ViewChild(DatatableComponent) table: DatatableComponent;

  cardTypeChange = val => console.log(val);
}
