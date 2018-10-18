import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { emailresponse } from './emailresponse';

@Injectable()
export class ResetpasswordService {
  resetUrl = 'http://www.automailer-fpr-dev.us-east-2.elasticbeanstalk.com/sendmail/reset_password';

   constructor(private http:Http) { }
  
  
 
//public sendEmail(email):Observable<emailresponse>{
//  var date = '2017-11-27T09:10:00';
//  var time = new Date(date);
//   
//  let sendEmailform = new emailresponse(email);
//   console.log("here"+email);
//
//   let options = new RequestOptions({ headers: headers });
//
//     let body = JSON.stringify(sendEmailform);
//     console.log(body);
//  
//  
//  
//      return this.http.post(this.resetUrl, body).map(this.extractData)
//    .catch(this.handleError);
//  
//  }
//  
//    private extractData(res: Response) {
//      let body = res.json();
//      console.log("serviceResponse >>"+body);
//      return body;
//  
//    }
//  
//   private handleError (error: Response | any) {
//    console.error(error.message || error);
//    return Observable.throw(error.status);
//    }
  

}
