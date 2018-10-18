import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 
@Injectable()
export class JsondataService {

  private jsondata;
  constructor(
    private http: HttpClient
  ){
    this.getJSON().subscribe(data => {
      this.jsondata = data;
    });
  }
  
  public getJSON(): Observable<any> {
    return this.http.get("../assets/data/traderList.json")
  }

  public getJsonData(){
    return this.jsondata;
  }
}
