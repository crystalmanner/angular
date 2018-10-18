
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertDescriptorApi } from './alert-descriptor-api';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AlertDescriptorService {

  
  apiUrl = environment.merchUrlLocal;
  constructor(private http:Http) { }
  
  
  public getAllMerchantsClients(descriptor):Observable<AlertDescriptorApi[]>{
        return this.http.get(this.apiUrl+descriptor)
          .map(this.extractData)       
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
 
  
  }
