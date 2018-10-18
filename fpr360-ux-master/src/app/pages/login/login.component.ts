import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Http,Response, RequestOptions,Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { emailresponse } from './emailresponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  logo = {
    url: 'assets/images/logo.png',
    width: 224,
    height: 70,
    title: 'FPR 360'
  };
  title = 'LOG IN';
  footerLinks = [
    {
      link: 'Privacy Policy',
      url: '/privacy-policy'
    },
    {
      link: 'Terms and Conditions',
      url: '/terms-and-conditions'
    },
    {
      link: 'Support Center',
      url: '/support-center'
    }
  ];
  forgotPasswordFlag = false;
  forgotPasswordText = 'Enter your email address or Recovery phone number';

  forgotPassword = () => {
    this.title = 'Forgot your password?';
    this.forgotPasswordFlag = true;
  };

  continueForgot = () => {
    this.title = 'LOG IN';
   
    this.forgotPasswordFlag = false;
    this.sendEmailSub(this.email.value);
 
    
    
     console.log("loginemail>>"+this.email.value);
    
    
  };

  passwordFunction = val => console.log(val);

  getErrorMessage = () => {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email') ? 'Not a valid email' : '';
  };



  ngOnInit() {}
  
  
  //password reset
  
  resetUrl = "http://automailer-fpr-dev.us-east-2.elasticbeanstalk.com/sendmail/reset_password";
  //resetUrl = "http://www.automailer-fpr-dev.us-east-2.elasticbeanstalk.com/sendmail/first_login";

   constructor(private http:Http) { }
  
  
   public sendEmailSub(email){
    
    this.sendEmail(email).subscribe((data:emailresponse) => {let dat=data;   
    console.log("inpostalert"+dat);
     })
  }
  
  
 
public sendEmail(email):Observable<emailresponse>{
 
 
   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
   headers.append('Accept', 'application/json');
   let options = new RequestOptions({ headers: headers});
  let sendEmailform = new emailresponse("email",email);
let responsebody = new emailresponse("","");

      let formData: FormData = new FormData(); 
    formData.append('email', email); 
   // formData.append('message', email);
  
     let body = JSON.stringify(sendEmailform);
     console.log("to be send>>"+body);
  
      return this.http.post(this.resetUrl,formData).map(this.extractData).catch(this.handleError);
        //.map(this.extractData)
    //.catch(this.handleError);
  
  }
  
    private extractData(res: Response) {
      console.log("serviceResponse being called>>");
      let body = res.json();
      console.log("serviceResponse >>"+body);
      return body;
  
    }
  
   private handleError (error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.status);
    }
  
  
  
  
  
  
}
