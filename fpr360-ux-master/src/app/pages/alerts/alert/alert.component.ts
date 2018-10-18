import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { AlertApi } from "./alertApi"; 
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

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
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertDataLine: {label: string; value: string; error: boolean;}[];
  alert: {company: {name: string;}; users: {name: string; position: string; avatar: string; url: string;}[]; settings: string[]; alertInfo: {provider: {label: string; value: string;}; idNumber: {label: string; value: string;}; card: {label: string; value: string;}; timestamp: {label: string; value: string;};}; transactionInfo: {merchant: {label: string; value: string;}; cardBin: {label: string; value: string;}; cc: {label: string; value: string;}; transactionId: {label: string; value: string;}; descriptor: {label: string; value: string;};};};
  
 
  public moneyMask = createCurrencyMask({
    prefix: '$ ',
    allowDecimal: true,
    requireDecimal: true
  });

  public cardBinMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // 6 digits

  public ccMask = [/\d/, /\d/, /\d/, /\d/]; // 4 digits

  public idMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // 9 digits

  readonly = false;
   dataArray:any;
 splittedArray:any[];
  
  
  isDataAvail:boolean = false;
    passedData:string='';
  isParamAvailable = false;
  
  
   constructor(private route :ActivatedRoute,private router:Router, private http:Http) {
   
    route.queryParams.subscribe(
 
  data => {let testdata = data['param'];
     this.isParamAvailable = true;
    //this.dataArray = this.passedData.split(',');
     this.dataArray = testdata;
     this.router.navigate(['/alerts/alert']);
     this.stayHere();
  })
   
   }
  
  stayHere(){
  if (this.isParamAvailable && this.dataArray != null) {
   // console.log('dataloaded>>'+this.passedData);
    this.splittedArray = this.dataArray.split(',');
    //this.isDataAvail=true;
   // this.stayHere;
   //this.router.navigate(['/alerts/alert-resolve']);
     console.log("data>>"+this.dataArray+"<<splitted>>"+this.splittedArray.length);
  
  
  

     this.alertDataLine = [
       {
      label: 'Dispute Amount',
      value: '$ '+this.splittedArray[12],
      error: false
    },
    {
      label: 'Alert Date',
      value: this.splittedArray[8],
      error: false
    },
    {
      label: 'Sale Amount',
      value: '$ '+this.splittedArray[2],
      error: false
    },
    {
      label: 'Sale Date',
      value: this.splittedArray[8],
      error: false
    },
    {
      label: 'Time remaining',
      value: '12hrs 8min',
      error: true
    }
  ];

  this.alert = {
    company: {
   
       name: this.splittedArray[1]
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
    settings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
    alertInfo: {
     provider: {
        label: 'Provider',
       
        value: this.splittedArray[6]
      },
      idNumber: {
        label: 'ID Number',
      
        value: this.splittedArray[7]
      },
      card: {
        label: 'Card Type',
       
        value: this.splittedArray[10]
      },
      timestamp: {
        label: 'Timestamp',
        //value: 'May 1, 2018 8:00AM EST'
       value: this.splittedArray[8]
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
    }
  };
  }
  }
  
  

 alertsUrl = "http://localhost:8080/alerts/update/";
   // alertsUrl = "http://fpr360api-alert.us-east-2.elasticbeanstalk.com/alerts/update";
  
public postAlert(id):Observable<AlertApi>{
  let alertUpdate = new AlertApi(id,"test1","test1","","","","","","","vv","","","","","","111","");
   console.log("here"+id);
   let headers = new Headers({ 'Content-Type': 'application/json'});
   headers.append("Access-Control-Max-Age", "3600");

       headers.append("Authorization", "Basic " + btoa("mesele"+":"+"mesele")); 

     headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    headers.append('Access-Control-Allow-Origin', 'http://fpr360api-alert.us-east-2.elasticbeanstalk.com');
      let options = new RequestOptions({ headers: headers });
   // this.alertUpdate.id = "Test1";
    //this.alertUpdate.alertName = "Test2"
     let body = JSON.stringify(alertUpdate);
     console.log(body);

      return this.http.post(this.alertsUrl+id, body, options).map(this.extractData)
    .catch(this.handleError);
   
  }
  
    private extractData(res: Response) {
      let body = res.json();
      console.log("serviceResponse >>"+body);
      return body;
   
      
    }
    private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }
 
 public updateAlert(id){
    
    this.postAlert(id).subscribe((data) => {let dat=data;   
    console.log("inpostalert"+dat);
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

 

  ngOnInit() {}

  selectSettings = val => console.log(val);

  backDate = date => console.log(date);

  cardTypeChange = val => console.log(val);
}
