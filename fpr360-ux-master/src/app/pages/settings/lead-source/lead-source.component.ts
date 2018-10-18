import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TextFieldDialogComponent } from '../../../dialogs/text-field-dialog/text-field-dialog.component';

import { TableFilterService } from '../../../services/table-filter.service';

@Component({
  selector: 'app-lead-source',
  templateUrl: './lead-source.component.html',
  styleUrls: ['./lead-source.component.scss']
})
export class LeadSourceComponent implements OnInit {
  leadSourceData = {
    rows: [
      {
        leadSourceName: 'Example',
        rowIncluded: true
      },
      {
        leadSourceName: 'Example',
        rowIncluded: true
      },
      {
        leadSourceName: 'Example',
        rowIncluded: true
      },
      {
        leadSourceName: 'Example',
        rowIncluded: true
      },
      {
        leadSourceName: 'Example',
        rowIncluded: true
      }
    ],
    cols: [{ name: 'Lead source name' }],
    addidionalData: {
      colsData: [
        {
          name: 'Lead source name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: false
        }
      ],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3']
    }
  };
  constructor(
    public dialog: MatDialog,
    private tableFiletr: TableFilterService
  ) {}

  ngOnInit() {}
  addLeadSource = () => {
    const dialogRef = this.dialog.open(TextFieldDialogComponent, {
      data: {
        dialogName: 'New Lead source',
        label: 'Lead source name'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.leadSourceData.rows.push({
          leadSourceName: result,
          rowIncluded: true
        });
        this.tableFiletr.setArray(this.leadSourceData.rows);
      }
    });
  };
}
