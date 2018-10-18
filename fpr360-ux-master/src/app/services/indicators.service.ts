import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IndicatorsService {
  indicator = {
    detailsIndicator: '',
    billingIndicator: '',
    crmIndicator: '',
    merchantsIndicalor: '',
    productsIndicator: '',
    activityIndicator: '',
    usersIndicator: '',
    gurusIndicator: '',
    midAccountsIndicator: '',
    clientsIndicator: '',
    reportsIndicator: '',
    tradersIndicator: ''
  };
  private indicators = new Subject<any>();

  indicator$ = this.indicators.asObservable();
  //  val -> 'true' or 'error'
  setDetailsIndicator = (val: string) => {
    this.indicator.detailsIndicator = val;
    this.indicators.next(this.indicator);
  };
  setBillingIndicator = (val: string) => {
    this.indicator.billingIndicator = val;
    this.indicators.next(this.indicator);
  };
  setCrmIndicator = (val: string) => {
    this.indicator.crmIndicator = val;
    this.indicators.next(this.indicator);
  };
  setMerchantsIndicator = (val: string) => {
    this.indicator.merchantsIndicalor = val;
    this.indicators.next(this.indicator);
  };
  setProductsIndicator = (val: string) => {
    this.indicator.productsIndicator = val;
    this.indicators.next(this.indicator);
  };
  setUsersIndicator = (val: string) => {
    this.indicator.usersIndicator = val;
    this.indicators.next(this.indicator);
  };
  setGurusIndicator = (val: string) => {
    this.indicator.gurusIndicator = val;
    this.indicators.next(this.indicator);
  };
  setActivityIndicator = (val: string) => {
    this.indicator.activityIndicator = val;
    this.indicators.next(this.indicator);
  };
  setMidAccountsIndicator = (val: string) => {
    this.indicator.midAccountsIndicator = val;
    this.indicators.next(this.indicator);
  };
  setClientsIndicator = (val: string) => {
    this.indicator.clientsIndicator = val;
    this.indicators.next(this.indicator);
  };
  setReportsIndicator = (val: string) => {
    this.indicator.reportsIndicator = val;
    this.indicators.next(this.indicator);
  };
  setTradersIndicator = (val: string) => {
    this.indicator.tradersIndicator = val;
    this.indicators.next(this.indicator);
  };
}
