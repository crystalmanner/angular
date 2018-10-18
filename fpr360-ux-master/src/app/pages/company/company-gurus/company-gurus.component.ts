import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignUserDialogComponent } from '../../../dialogs/assign-user-dialog/assign-user-dialog.component';
import { TableFilterService } from '../../../services/table-filter.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-company-gurus',
  templateUrl: './company-gurus.component.html',
  styleUrls: ['./company-gurus.component.scss']
})
export class CompanyGurusComponent implements OnInit {
  gurusData = {
    rows: [
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Milton Underwood',
        type: 'Follow Up Lead',
        email: 'murazik.albertha@hotmail.com',
        role: 'Primary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: true
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Isaiah Figueroa',
        type: 'Chargeback Analyst',
        email: 'isaiah@fpr360.com',
        role: 'Secondary',
        status: 'Inactive_label',
        pathTo: '/profile/details',
        rowIncluded: true
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Elijah Rodriguez',
        type: 'Chargeback Analyst',
        email: 'elijah@fpr360.com',
        role: 'Primary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: false
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Paul Maldonado',
        type: 'Chargeback Analyst',
        email: 'paul@fpr360.com',
        role: 'Primary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: false
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Milton Underwood',
        type: 'Follow Up Lead',
        email: 'murazik.albertha@hotmail.com',
        role: 'Primary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: false
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Isaiah Figueroa',
        type: 'Chargeback Analyst',
        email: 'isaiah@fpr360.com',
        role: 'Secondary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: false
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Elijah Rodriguez',
        type: 'Chargeback Analyst',
        email: 'elijah@fpr360.com',
        role: 'Secondary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: false
      },
      {
        icon: {
          type: 'image',
          initials: '',
          color: '',
          photo: '/assets/images/user.png',
          guru: true
        },
        name: 'Paul Maldonado',
        type: 'Chargeback Analyst',
        email: 'paul@fpr360.com',
        role: 'Primary',
        status: 'Active_label',
        pathTo: '/profile/details',
        rowIncluded: false
      }
    ],
    cols: [
      { name: 'Name' },
      { name: 'Type' },
      { name: 'Email' },
      { name: 'Role' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Name',
          included: true,
          rightAlign: false,
          width: 0,
          bold: true,
          leftFixed: true,
          editableselect: false,
          editableSelectOptions: []
        },
        {
          name: 'Type',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: []
        },
        {
          name: 'Email',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: []
        },
        {
          name: 'Role',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false,
          editableselect: true,
          editableSelectOptions: ['Primary', 'Secondary']
        },
        {
          name: 'Status',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false,
          editableselect: false,
          editableSelectOptions: []
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      selects: [
        {
          selected: 'All Roles',
          options: ['All Roles', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ],
      assignItems: true
    }
  };

  cloneArray = [];

  constructor(
    public dialog: MatDialog,
    private tableFiletr: TableFilterService
  ) {}
  ngOnInit() {
    this.cloneArray = _.cloneDeep(this.gurusData.rows);
  }
  addGuruDialog = () => {
    const dialogRef = this.dialog.open(AssignUserDialogComponent, {
      data: {
        dataArray: this.cloneArray,
        dialogName: 'Assign Guru'
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tableFiletr.setArray(result);
        this.cloneArray = result;
      }
    });
  };
}
