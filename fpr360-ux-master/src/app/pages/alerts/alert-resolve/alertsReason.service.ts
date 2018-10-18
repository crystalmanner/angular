import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertReason } from './alertReasonApi';
import { environment } from '../../../../environments/environment';



@Injectable()
export class AlertReasonService {

   apiUrl = environment.reasonUrlLocal;
  constructor(private http:Http) { }
  
  
  public getAllOutcomeReasons():Observable<AlertReason[]>{
        return this.http.get(this.apiUrl)
          .map(this.extractData)       
            .catch(this.handleError);

    }
  
   private extractData(res: Response) {
      let body = res.json();
      //console.log("serviceResponse >>"+body);
      return body;
  
    }
  
   private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }
  
}


  
