import { Component, OnInit } from '@angular/core';
import { TableFilterService } from '../../services/table-filter.service';
//wiring with data from microservices
import { AlertsService } from './alerts.service'; //service
import { AlertsApi } from './alerts-api';  //service

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  
  
row: {
 icon: {
 iconName: string;
 iconColor: string;
 };
 company: string;
 merchant: string;
 descriptor: string;
 provider: string;
 alertDate: string;
 transDate: string;
 amount: string;
 assignedTo: string;
  status:string;
 pathTo: string;
 new: boolean;
 rowIncluded: boolean;
}[]=[] ;

  isDataAvailable:boolean = false;  //service
  rowList:string='';
  public allAlerts:AlertsApi[] =[];
   temp = [];
  
// row=[];
  
  setFlag(){
    
    if(this.rowList.length>1) {this.isDataAvailable= true;
     this.temp = this.alertsData.rows;
     // console.log("somemethod"+this.temp);
    };
  }
  
  
  getAllAlerts(){
   
    this.alertsService.getAllAlerts().subscribe((data:AlertsApi[]) => {this.allAlerts=data;  
       let iconname,pathto,iconcolor,status;
     
      for (let i of this.allAlerts) {
       
        if(i.chargebackAmount == null){i.chargebackAmount = 0.00}
       
        
        if(i.saleTransactionId == null){ i.saleTransactionId = "00000000000"}
         if(i.transactionAmount == null){ i.transactionAmount = 0.00}
       
       if(i.status == "2" || i.status =="3"){
          
         
       if (i.duplicate == true ){
         
       console.log("duplicate::");
         iconname= 'icon-dupl_alert', iconcolor= 'blue-color',pathto='alerts/alert-duplicate',status='DUPLICATE'}
           
       else if(i.status=='2'){
         
       console.log("new::");
         iconname= 'new_releases',iconcolor='green-color',pathto='alerts/alert-resolve',status='NEW'}
     
       
      else if (i.status == '3' && !(i.clientName.trim() == '' || i.merchantName.trim() == '')){
        console.log("other::");
       iconname= "warning",iconcolor='orange-color', pathto='alerts/alert-resolve',status='EXPIRING'}
      
      else if(i.clientName.trim() == '' || i.merchantName.trim() == '') { 
         
       console.log("error::");
         iconname= "error",iconcolor='error-color', pathto='alerts/alert-descriptor', status='UNKNOWN'}
           
           
           
      let inputJson1 = {        
         "icon":{
          "flag": false,
          // iconName: 'warning',
         // iconColor: 'orange-color'
          "iconName": iconname,
        // "iconName": "warning",
         "iconColor": iconcolor,
         //"type": "",
         //"initials": "",
        // "color": "",
        // "photo": ""
           },
           "company" : i.clientName,
           "merchant":i.merchantName,         
           "descriptor":i.descriptor,
           "provider":i.alertName,
           "alertDate":(new Date(i.alertDate)).toDateString(),         
           "transDate":(new Date(i.transactionDate)).toDateString(),
           "amount":'$ '+Number(i.transactionAmount).toFixed(2), 
         
           "status":i.statusName, 
           "assignedTo":i.assignedTo,                 
           "rowSettings": ["Option 1", "Option 2", "divider", "Option 3"],
           "pathTo": pathto+'?param='+i.descriptor+','+i.clientName+','+Number(i.transactionAmount).toFixed(2)+','+i.creditCardBin+','+i.creditCardLastFour+','+
           i.merchantName+','+i.alertName+','+i.id+','+i.alertDate+','+(new Date(i.transactionDate)).toDateString()+
           ','+i.cardType+','+i.saleTransactionId+','+Number(i.chargebackAmount).toFixed(2)+','+status+','+i.alertProviderIssuerId,
           "new": false,
           "rowIncluded": true
        };
            this.row.push(inputJson1);
         
          
        }; 
      };
     this.row.shift();
     this.rowList=JSON.stringify(this.row);
      // console.log("rowlist"+this.rowList);
     this.setFlag();
      })
  
 
  }
  


  
  

  alertsData = {
    rows: this.row,
    cols: [
      { name: 'Company' },
      { name: 'Merchant' },
      { name: 'Descriptor' },
      { name: 'Provider' },
      { name: 'Alert Date' },
      { name: 'Trans Date' },
      { name: 'Amount' },
      { name: 'Status' },
      { name: 'Assigned To' }
      
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Company',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
           canAutoResize:true
        },
        {
          name: 'Merchant',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
           canAutoResize:true
        },
        {
          name: 'Descriptor',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          canAutoResize:true
        },
        {
          name: 'Provider',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
          canAutoResize:true
        },
        {
          name: 'Alert Date',
          included: true,
          rightAlign: false,
          width: 140,
          bold: false,
          leftFixed: true,
           canAutoResize:true
        },
        {
          name: 'Trans Date',
          included: true,
          rightAlign: false,
          width: 140,
          bold: false,
          leftFixed: true
         
        },
        {
          name: 'Amount',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
          canAutoResize:true
        },
        {
          name: 'Status',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
          canAutoResize:true
        },
        {
          name: 'Assigned To',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true,
          canAutoResize:true
        }
         
      ],
     // toolbarOptions: {
       // options: ['Option 1', 'Option 2', 'Option 3'],
      //  function: val => console.log(val)
     // },
     rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      selects: [
        {
          selected: 'Provider',
          options: ['Provider', 'Verifi', 'Ethoca','Visa Inquiry'],
          function: val => {
            this.providerFilter(val);
          }
        },
        {
          selected: 'Status',
          options: ['Status', 'NEW', 'OTHER - See Comments','RESOLVED','NOT FOUND','UNRESOLVD','PARTIALLY RESOLVED', 'RESOLVED - Previously Refunded'],
          function: val => {
         
            this.providerFilterStatus(val);
          }
        }
      ],
      assignDialogName: 'Assign Alerts',
      assignArray: [
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user.png',
            guru: true
          },
          name: 'Jared Smith',
          position: 'Alerts Analyst',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user2.png',
            guru: true
          },
          name: 'Tillie Rose',
          position: 'Chargeback Analyst',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user3.png',
            guru: true
          },
          name: 'Agnes Oliver',
          position: 'Chargeback Analyst',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user4.png',
            guru: true
          },
          name: 'Elsie Lewis',
          position: 'Follow Up Lead',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user5.png',
            guru: true
          },
          name: 'Maurice Colon',
          position: 'Chargeback Analyst',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user6.png',
            guru: true
          },
          name: 'Joel Phillips',
          position: 'Follow Up Lead',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user7.png',
            guru: true
          },
          name: 'Jared Smith',
          position: 'Alerts Analyst',
          rowIncluded: false
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user8.png',
            guru: true
          },
          name: 'Viola McCormick',
          position: 'Follow Up Lead',
          rowIncluded: false
        }
      ]
    }
  };

  constructor(private tableFiletr: TableFilterService,private alertsService: AlertsService) {}

  ngOnInit() {
    this.getAllAlerts();
   
    this.temp = this.alertsData.rows;
    
  }

  providerFilter = val => {
    const temp = this.temp.filter(function(d) {
      return val !== 'Provider' ? d.provider.indexOf(val) !== -1 : d.provider.indexOf('') !== -1;
    });
    this.alertsData.rows = temp;
 
   this.tableFiletr.setArray(this.alertsData.rows);
  };
  
   providerFilterStatus = val => {
    const temp = this.temp.filter(function(d) {
      return val !== 'Status'
        ? d.status.indexOf(val) !== -1
        : d.status.indexOf('') !== -1;
    });
    this.alertsData.rows = temp;
 
   this.tableFiletr.setArray(this.alertsData.rows);
  };
  
}
