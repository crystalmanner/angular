import { Component, OnInit, OnChanges, SimpleChanges, HostListener, ViewChild, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatatableComponent, TableColumn } from '@swimlane/ngx-datatable';
import { TableFilterService } from '../../../services/table-filter.service';

import { AssignUserDialogComponent } from '../../../dialogs/assign-user-dialog/assign-user-dialog.component';
import { TableSettingsDialogComponent } from '../../../dialogs/table-settings-dialog/table-settings-dialog.component';
import { NotesDialogComponent } from '../../../dialogs/notes-dialog/notes-dialog.component';

import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable'; //[LS] added

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() dateRange = false;
  @Input() timeFilter = false;
  @Input() assignButton = false;
  @Input() duplicatesFilter = false;

  //
  // [Lorraine J. Silvestri] New Implementation
  // Separate configuration and data in the tableData so that we can 
  // support asynchronous data.
  @Input() config = {};
  @Input() data: any[];

  // Old Implementation -> for backward compatibility UNTIL all component usage
  // is upgraded.
  @Input()
  tableData = {
    rows$: null,  //[LS] added to handle asynchronous data.
    rows: [
      {
        icon: {
          iconName: '',
          iconColor: '',
          type: '', //image or inintial
          initials: '',
          color: '',
          photo: ''
        },
        company: '',
        rowIncluded: true,
        pathTo: ''
      }
    ],
    cols: [{ name: 'Cell Name' }],
    addidionalData: {
      colsData: [
        {
          name: 'Cell Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true,
          canAutoResize:true
        }
      ],
      toolbarFilter: {
        options: [
          {
            option: 'Option 1',
            flag: false
          },
          {
            option: 'Option 2',
            flag: false
          },
          {
            option: 'Option 3',
            flag: false
          },
          {
            option: 'Option 4',
            flag: false
          }
        ],
        function: val => console.log(val)
      },
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
     },
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      // selects: [
      //   {
      //     selected: 'Event',
      //     options: ['Event', 'Event 2', 'Event 3'],
      //     function: val => console.log(val)
      //   }
      // ]
      assignDialogName: '',
      assignArray: [],
      downloadButton: {
        function: val => console.log(val)
      },
      statusBadges: false,
      assignItems: false
    }
  };

  showDuplicates = false;
  selectedCount = 0;
  indeterminate = false;
  n = 0;
  newCounter = 0;
  expiringCounter: any;
  globalTableSettings = ['Manage Columns', 'divider', 'Restore Default'];
  selected = [];
  temp = [];
  colTemp = [];
  selectedFlag = false;
  user: any;
  dataArray: any;
  checkVisible = '';
  errorCounter = '';
  noresult = true;
  restoreArray = [];
  includedFilterArray = [];
  restoreRows = [];
  searchArray = [];
  tableSearchArray = [];
  showDuplicate = [];
  tableSearch = false;
  tableSearchFilter = '';  
  duplicateSearch = false;

  constructor(
    public dialog: MatDialog,
    public ref: ChangeDetectorRef,
    private tableFiletr: TableFilterService,
    public snackBar: MatSnackBar
  ) {
    tableFiletr.data$.subscribe(data => {
      if (data) {
        if (this.tableData.addidionalData.assignItems) {
          const cleanList = data.filter(d => {
            return d.rowIncluded;
          });
          this.tableData.rows = [...cleanList];
        } else {
          this.tableData.rows = [...data];
        }
      }
      this.temp = [...this.tableData.rows];
    });
  }

  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private currentComponentWidth;
  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableData !== undefined && changes.tableData.isFirstChange) { // Use for backwards compatibity
      this._initialize();
    }

    if (changes.config !== undefined && changes.config.isFirstChange) {
      this._config(changes.config.currentValue);
    }

    if (changes.data !== undefined && changes.data.currentValue) {
      this._data(changes.data.currentValue);
    }
  }

  private _initialize = () => {
    this.temp = [...this.tableData.rows];
    if (this.tableData.addidionalData.assignItems) {
      const cleanList = this.temp.filter(d => {
        return d.rowIncluded;
      });
      this.tableData.rows = cleanList;
    }
    this.restoreArray = _.cloneDeep(this.tableData.addidionalData.colsData);
    this.restoreRows = _.cloneDeep(this.tableData.rows);

    let i = 0;
    let ex = 0;
    for (let item of this.tableData.rows) {
      if (item.icon) {
        item.icon.iconName && item.icon.iconName === 'error' ? i++ : null;
        item.icon.iconName && item.icon.iconName === 'new_releases'
          ? this.newCounter++
          : null;
        item.icon.iconName && item.icon.iconName === 'warning' ? ex++ : null;
      }
    }
    if (ex > 0) {
      this.tableData.addidionalData.statusBadges
        ? (this.expiringCounter = ex + ' Void')
        : (this.expiringCounter = ex + ' Expiring');
    }
    if (i > 0) {
      if (this.tableData.addidionalData.statusBadges) {
        this.errorCounter = i + ' Declined';
      } else {
        i === 1
          ? (this.errorCounter = '1 error')
          : (this.errorCounter = i + ' errors');
      }
    }
  }

  private _config = (val) => {
    this.tableData.cols = val;
    this.tableData.addidionalData = val.addidionalData;
    this.restoreArray = _.cloneDeep(this.tableData.addidionalData.colsData);
  }

  private _data = (val) => {
    this.temp = [...val];

    if (!this.tableSearch) {
      this.tableData.rows = val;
    } else {
      this.searchFunction(this.tableSearchFilter);
    }

    
    if (this.tableData.addidionalData.assignItems) {
      const cleanList = this.temp.filter(d => {
        return d.rowIncluded;
      });
      this.tableData.rows = cleanList;
    }
    this.restoreRows = _.cloneDeep(this.temp);

    let i = 0;
    let ex = 0;
    for (let item of this.temp) {
      if (item.icon) {
        item.icon.iconName && item.icon.iconName === 'error' ? i++ : null;
        item.icon.iconName && item.icon.iconName === 'new_releases'
          ? this.newCounter++
          : null;
        item.icon.iconName && item.icon.iconName === 'warning' ? ex++ : null;
      }
    }
    if (ex > 0) {
      this.tableData.addidionalData.statusBadges
        ? (this.expiringCounter = ex + ' Void')
        : (this.expiringCounter = ex + ' Expiring');
    }
    if (i > 0) {
      if (this.tableData.addidionalData.statusBadges) {
        this.errorCounter = i + ' Declined';
      } else {
        i === 1
          ? (this.errorCounter = '1 error')
          : (this.errorCounter = i + ' errors');
      }
    }
  }

  ngOnDestroy() {
  }

  // table functions
  onSelect = ({ selected }) => {
    this.n = this.tableData.rows.length;
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.selectedCount = this.selected.length;
    this.selectedCount > 0
      ? (this.selectedFlag = true)
      : (this.selectedFlag = false);
    this.selectedCount > 0 && this.selectedCount < this.n
      ? (this.indeterminate = true)
      : (this.indeterminate = false);
  };

  onActivate = event => {
    if (event.type === 'click' && event.column.name != 'no-link') {
      if (event.row.pathTo) {
        window.location.href = '/#' + event.row.pathTo;
      }
    }
  };

  onEvent = event => event.stopPropagation();

  add = () => {
    this.selected.push(
      this.tableData.rows[1],
      this.tableData.rows[this.tableData.rows.length]
    );
  };

  update = () => {
    this.selected = [
      this.tableData.rows[1],
      this.tableData.rows[this.tableData.rows.length]
    ];
  };

  cancelSelected = () => {
    this.selected = [];
    this.selectedFlag = false;
    this.indeterminate = false;
    this.checkVisible = '';
  };

  displayCheck = row => {
    return row.name !== 'Ethel Price';
  };

  getCellClass = () => 'right-align';

  selectGlobalTableSettings = val => {
    switch (val) {
      case 'Manage Columns': {
        const dialogRef = this.dialog.open(TableSettingsDialogComponent, {
          data: {
            dataArray: this.tableData.addidionalData.colsData
          },
          autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            const temp = result.filter(function(d) {
              return d.included !== -1 || !val;
            });
            this.tableData.addidionalData.colsData = temp;
            this.table.offset = 0;
          }
        });
        break;
      }
      case 'Restore Default':
        {
          this.tableData.addidionalData.colsData = [...this.restoreArray];
          this.table.offset = 0;
        }
        break;
      default:
        break;
    }
  };
  //end table functions

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.selected = [];
      this.selectedFlag = false;
      this.indeterminate = false;
      this.checkVisible = '';
      this.table.offset = 0;
      this.clearBadgeSearch();
    }
  }

  getRowClass = row => {
    if (row.totalRow) {
      return 'total-row';
    }
    if (row.pathTo) {
      return 'row-link';
    }
    if (row.new) {
      return 'new-row';
    } else if (row.new && row.pathTo) {
      return 'new-row row-link';
    }
  };

  // functions for grid section
  allCheck = flag => {
    this.selectedCount = 0;
    for (let item of this.tableData.rows) {
      if (flag) {
        this.selectedCount++;
      } else {
        this.checkVisible = '';
        this.selectedFlag = false;
      }
    }
  };

  rowCheck = (index, flag) => {
    this.selectedCount = 0;
    for (let item of this.tableData.rows) {
      if (this.selectedCount) {
        this.checkVisible = 'check-visible';
        this.selectedFlag = true;
      } else {
        this.checkVisible = '';
        this.selectedFlag = false;
      }
    }
  };

  openAssignDialog = () => {
    const dialogRef = this.dialog.open(AssignUserDialogComponent, {
      data: {
        dataArray: this.tableData.addidionalData.assignArray,
        dialogName: this.tableData.addidionalData.assignDialogName
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let n = 0;
        let message;
        let snackBarClass;

        for (let item of result) {
          item.rowIncluded ? n++ : null;
        }
        n === 0 ? (snackBarClass = 'error') : (snackBarClass = 'success');
        n != 1
          ? (message = 'Assigned ' + n + ' users')
          : (message = 'Assigned ' + n + ' user');
        this.selected = [];
        this.selectedFlag = false;
        this.indeterminate = false;
        this.checkVisible = '';
        this.table.offset = 0;
        this.snackBar.open(message, ' ', {
          duration: 2000,
          panelClass: snackBarClass
        });
      }
    });
  };

  searchFunction = val => {
    if (typeof val === 'string') {
      val ? (this.tableSearch = true) : (this.tableSearch = false);
      this.tableSearchFilter = val;
      if (this.duplicateSearch) {
        this.searchArray = _.cloneDeep(this.showDuplicate);
        const temp = this.searchArray.filter(d => {
          let data = Object.keys(d).some(
            (k: any) =>
              d[k]
                .toString()
                .toLowerCase()
                .indexOf(val.toLowerCase()) !== -1
          );
          return data;
        });
      } else {
        const temp = this.temp.filter(d => {
          let data = Object.keys(d).some(
            (k: any) =>
              d[k]
                .toString()
                .toLowerCase()
                .indexOf(val.toLowerCase()) !== -1
          );
          return data;
        });

        // update the rows
        this.tableData.rows = temp;
        this.tableSearchArray = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }

      let n = this.tableData.rows.length;
      n === 0 ? (this.noresult = false) : (this.noresult = true);
    }
  };

  //show duplicates for alerts
  showDuplicatesFunction = val => {
    if (this.tableSearch) {
      this.searchArray = _.cloneDeep(this.tableSearchArray);
      const temp = this.searchArray.filter(d => {
        val ? (this.duplicateSearch = true) : (this.duplicateSearch = false);
        let data = val
          ? d.icon.iconName.indexOf('icon-dupl_alert') !== -1
          : d.icon.iconName.indexOf('') !== -1;
        return data;
      });
      // update the rows
      this.tableData.rows = temp;
      this.showDuplicate = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    } else {
      const temp = this.temp.filter(d => {
        val ? (this.duplicateSearch = true) : (this.duplicateSearch = false);
        let data = val
          ? d.icon.iconName.indexOf('icon-dupl_alert') !== -1
          : d.icon.iconName.indexOf('') !== -1;
        return data;
      });
      // update the rows
      this.tableData.rows = temp;
      this.showDuplicate = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }
  };

  // badge filters
  errorFilterFlag = false;
  errorFilter = () => {
    this.errorFilterFlag = !this.errorFilterFlag;
    let flag = this.errorFilterFlag;
    const temp = this.temp.filter(d => {
      return flag
        ? d.icon.iconName.indexOf('error') !== -1
        : d.icon.iconName.indexOf('') !== -1;
    });
    // update the rows
    this.tableData.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  };

  expiringFilterFlag = false;
  expiringFilter = () => {
    this.expiringFilterFlag = !this.expiringFilterFlag;
    let flag = this.expiringFilterFlag;
    const temp = this.temp.filter(d => {
      return flag
        ? d.icon.iconName.indexOf('warning') !== -1
        : d.icon.iconName.indexOf('') !== -1;
    });
    // update the rows
    this.tableData.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  };

  newFilterFlag = false;
  newFilter = () => {
    this.newFilterFlag = !this.newFilterFlag;
    let flag = this.newFilterFlag;
    const temp = this.temp.filter(d => {
      return flag
        ? d.icon.iconName.indexOf('new_releases') !== -1
        : d.icon.iconName.indexOf('') !== -1;
    });
    // update the rows
    this.tableData.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  };

  //clear badge search
  clearBadgeSearch = () => {
    if (this.temp[0].icon.iconName) {
      const temp = this.temp.filter(d => {
        return d.icon.iconName ? d.icon.iconName.indexOf('') !== -1 : null;
      });
      // update the rows
      this.tableData.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }
  };

  //date range
  dateRangeFunction = val => console.log(val);

  //resize columns
  rowSettings = (val, row) => console.log(val, row);
  changeStatus = (val, item) => {
    console.log(val, item);
  };

  //notes dialog
  openNotes = notes => {
    const dialogRef = this.dialog.open(NotesDialogComponent, {
      data: {
        notes: notes
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
