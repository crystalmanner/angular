import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TableFilterService {
  data = [];

  private array = new Subject<any>();

  data$ = this.array.asObservable();

  constructor() {}

  setArray = array => {
    this.data = array;
    this.array.next(this.data);
  };
}
