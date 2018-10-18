import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettingsDialogComponent } from '../../../dialogs/table-settings-dialog/table-settings-dialog.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-single-table',
  templateUrl: './single-table.component.html',
  styleUrls: ['./single-table.component.scss']
})
export class SingleTableComponent implements OnInit {
  @Input()
  tableData = {
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
          leftFixed: true
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
      assignDialogName: '',
      assignArray: [],
      totalRow: false,
      totalValue: ''
    }
  };
  @Input() manageColumn = true;
  globalTableSettings = ['Manage Columns', 'divider', 'Restore Default'];
  restoreArray = [];
  temp = [];

  constructor(public dialog: MatDialog) {}
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit() {
    this.temp = [...this.tableData.rows];
    this.restoreArray = _.cloneDeep(this.tableData.addidionalData.colsData);
  }

  getCellClass = () => 'right-align';

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

  rowSettings = (val, row) => console.log(val, row);

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
            this.table.recalculateColumns();
            this.table.offset = 0;
          }
        });
        break;
      }
      case 'Restore Default':
        {
          this.tableData.addidionalData.colsData = [...this.restoreArray];
          this.table.recalculateColumns();
          this.table.offset = 0;
        }
        break;
      default:
        break;
    }
  };
}
