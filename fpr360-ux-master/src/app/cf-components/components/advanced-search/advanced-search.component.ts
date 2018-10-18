import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  searchCtrl: FormControl;

  @Input() autocomplete: Array<any> = [];
  @Input() open = false;
  @Output() close: EventEmitter<any> = new EventEmitter();

  showAdvansedSearch = false;
  showAutocomplete = true;
  inputVal: '';
  filteredSearch: Observable<any[]>;

  filterFields = [
    {
      type: 'field', // field | select
      placeholder: 'Company',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    },
    {
      type: 'field', // field | select
      placeholder: 'Merchant',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    },
    {
      type: 'field', // field | select
      placeholder: 'MID',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    },
    {
      type: 'field', // field | select
      placeholder: 'Amount',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    },
    {
      type: 'select', // field | select
      placeholder: 'Occured on',
      value: '',
      options: [
        {
          value: 'Option 1',
          viewValue: 'Option 1'
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
    },
    {
      type: 'select', // field | select
      placeholder: 'Date',
      value: '',
      options: [
        {
          value: 'Any Date',
          viewValue: 'Any Date'
        },
        {
          value: 'Last Day',
          viewValue: 'Last Day'
        },
        {
          value: 'Last Week',
          viewValue: 'Last Week'
        },
        {
          value: 'Last Month',
          viewValue: 'Last Month'
        }
      ]
    },
    {
      type: 'select', // field | select
      placeholder: 'Status',
      value: '',
      options: [
        {
          value: 'Active',
          viewValue: 'Active'
        },
        {
          value: 'Inactive',
          viewValue: 'Inactive'
        }
      ]
    },
    {
      type: 'field', // field | select
      placeholder: 'ID#',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    }
  ];

  checkedAll = true;
  checkedAlerts = false;
  checkedChargebacks = false;

  ngAfterViewInit() {}

  closeFunction = value => this.close.emit(value);
  globalClose = () => {
    this.showAdvansedSearch = false;
    this.showAutocomplete = true;
    this.inputVal = '';
    this.closeFunction(false);
  };
  cancelAdvansedSearch = el => {
    this.showAdvansedSearch = false;
    this.showAutocomplete = true;
    this.inputVal = '';
    el.focus();
  };
  search = () => {
    this.globalClose();
  };

  checkAll = () => {
    this.checkedAll = true;
    this.checkedAlerts = false;
    this.checkedChargebacks = false;
  };
  checkAlerts = () => {
    this.checkedAll = false;
    this.checkedAlerts = true;
    this.checkedChargebacks = false;
  };
  checkChargebacks = () => {
    this.checkedAll = false;
    this.checkedAlerts = false;
    this.checkedChargebacks = true;
  };

  changeValue = (item, val) => {
    console.log(item, val);
  };

  addDate = () => {
    this.filterFields.push({
      type: 'select',
      placeholder: 'Date',
      value: '',
      options: [
        {
          value: 'Any Date',
          viewValue: 'Any Date'
        },
        {
          value: 'Last Day',
          viewValue: 'Last Day'
        },
        {
          value: 'Last Week',
          viewValue: 'Last Week'
        },
        {
          value: 'Last Month',
          viewValue: 'Last Month'
        }
      ]
    });
  };
  addStatus = () => {
    this.filterFields.push({
      type: 'select', // field | select
      placeholder: 'Status',
      value: '',
      options: [
        {
          value: 'Active',
          viewValue: 'Active'
        },
        {
          value: 'Inactive',
          viewValue: 'Inactive'
        }
      ]
    });
  };
  addAmount = () => {
    this.filterFields.push({
      type: 'field', // field | select
      placeholder: 'Amount',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    });
  };
  addId = () => {
    this.filterFields.push({
      type: 'field', // field | select
      placeholder: 'ID#',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    });
  };
  addName = () => {
    this.filterFields.push({
      type: 'field', // field | select
      placeholder: 'Name',
      value: '',
      options: [
        {
          value: '',
          viewValue: ''
        }
      ]
    });
  };

  constructor() {
    this.searchCtrl = new FormControl();
    this.filteredSearch = this.searchCtrl.valueChanges
      .startWith(null)
      .map(
        search =>
          search ? this.filterSearch(search) : this.autocomplete.slice()
      );
  }

  filterSearch(name: string) {
    return this.autocomplete.filter(
      item => item.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  cancelFunction = el => {
    this.inputVal = '';
    el.focus();
  };

  searchFunction = el => {
    this.globalClose();
    this.focusFunction(el);
  };

  focusFunction = el => {
    el.focus();
  };
  blurFunction = () => {};
  ngOnInit() {}

  changeFunction = val => {
    console.log(val);
  };

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.globalClose();
    }
  }
}
