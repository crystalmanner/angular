import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadDialogComponent } from '../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-chargebacks',
  templateUrl: './chargebacks.component.html',
  styleUrls: ['./chargebacks.component.scss']
})
export class ChargebacksComponent implements OnInit {
  chargebacksData = {
    rows: [
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        company: 'First Hawaiian Bank',
        case: '0757394047478',
        amount: '$661.21',
        reason: '5839',
        cbDueDate: '19 Jan 2017',
        assignedTo: 'William Logan',
        status: 'Pending_label',
        pathTo: '/chargeback-error',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        company: 'Whirlpool Corporation',
        case: '8265840205749',
        amount: '$669.17',
        reason: '5758',
        cbDueDate: '27 May 2017',
        assignedTo: 'Marian Owens',
        status: 'Pending_label',
        pathTo: '/chargeback-error',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        company: 'McGraw-Hill',
        case: '6547393653936',
        amount: '$737.62',
        reason: '5753',
        cbDueDate: '05 Oct 2017',
        assignedTo: 'Claudia Tran',
        status: 'Pending_label',
        pathTo: '/chargeback-error',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        company: 'Wienerschnitzel',
        case: '9275373937528',
        amount: '$419.05',
        reason: '57583',
        cbDueDate: '08 Dec 2017',
        assignedTo: 'Michael Hayes',
        status: 'Pending_label',
        pathTo: '/chargeback-error',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'error',
          iconColor: 'error-color'
        },
        company: "McDonald's",
        case: '9275373937528',
        amount: '$422.65',
        reason: '5753',
        cbDueDate: '20 Jun 2017',
        assignedTo: 'Jonathan Bishop',
        status: 'Pending_label',
        pathTo: '/chargeback-error',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'new_releases',
          iconColor: 'green-color'
        },
        company: 'White Castle',
        case: '5767336086957',
        amount: '$544.06',
        reason: '5839',
        cbDueDate: '06 Jul 2017',
        assignedTo: 'Jonathan Porter',
        status: 'New_label',
        pathTo: '/chargeback-summary',
        new: true,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'new_releases',
          iconColor: 'green-color'
        },
        company: 'Sun Products',
        case: '5749572026589',
        amount: '$553.08',
        reason: '2947',
        cbDueDate: '16 Jan 2017',
        assignedTo: 'Warren Gordon',
        status: 'New_label',
        pathTo: '/chargeback-summary',
        new: true,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'new_releases',
          iconColor: 'green-color'
        },
        company: 'The McClatchy Company',
        case: '5748362946393',
        amount: '$275.95',
        reason: '9473',
        cbDueDate: '04 Jan 2017',
        assignedTo: 'Martha Warren',
        status: 'New_label',
        pathTo: '/chargeback-summary',
        new: true,
        rowIncluded: true
      },
      {
        icon: {
          iconName: 'new_releases',
          iconColor: 'green-color'
        },
        company: 'Firstsource',
        case: '3757306783729',
        amount: '$157.57',
        reason: '5753',
        cbDueDate: '22 May 2017',
        assignedTo: 'Katie Black',
        status: 'New_label',
        pathTo: '/chargeback-summary',
        new: true,
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        company: 'Johnsonville Foods',
        case: '3757306783729',
        amount: '$571.23',
        reason: '5738',
        cbDueDate: '05 Jul 2017',
        assignedTo: 'Katherine Yates',
        status: 'Lost_label',
        pathTo: '/chargeback-summary',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        company: 'FirstEnergy Corporation',
        case: '8265840205749',
        amount: '$313.77',
        reason: '5839',
        cbDueDate: '09 Jul 2017',
        assignedTo: 'Theresa Hayes',
        status: 'Unfought_label',
        pathTo: '/chargeback-summary',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        company: 'Darden Restaurants',
        case: '3757306783729',
        amount: '$905.18',
        reason: '9274',
        cbDueDate: '02 Feb 2017',
        assignedTo: 'Bernard Huff',
        status: 'Lost_label',
        pathTo: '/chargeback-summary',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        company: 'D. R. Horton',
        case: '3757306783729',
        amount: '$928.5',
        reason: '2873',
        cbDueDate: '23 Aug 2017',
        assignedTo: 'Sally Sullivan',
        status: 'Won_label',
        pathTo: '/chargeback-summary',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        company: 'D. R. Horton',
        case: '3757306783729',
        amount: '$928.5',
        reason: '2873',
        cbDueDate: '22 Aug 2017',
        assignedTo: 'Sally Sullivan',
        status: 'Won_label',
        pathTo: '/chargeback-summary',
        new: false,
        rowIncluded: true
      },
      {
        icon: {
          iconName: '',
          iconColor: ''
        },
        company: 'Darden Restaurants',
        case: '3757306783729',
        amount: '$905.18',
        reason: '9274',
        cbDueDate: '02 Feb 2017',
        assignedTo: 'Bernard Huff',
        status: 'Lost_label',
        pathTo: '/chargeback-summary',
        new: false,
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Company' },
      { name: 'Case' },
      { name: 'Amount' },
      { name: 'Reason' },
      { name: 'CB Due Date' },
      { name: 'Assigned to' },
      { name: 'Status' }
    ],
    addidionalData: {
      colsData: [
        {
          name: 'Company',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: true
        },
        {
          name: 'Case',
          included: true,
          rightAlign: false,
          width: 160,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Amount',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Reason',
          included: true,
          rightAlign: true,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'CB Due Date',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Assigned To',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Status',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        }
      ],
      rowSettings: ['Option 1', 'Option 2', 'divider', 'Option 3'],
      toolbarOptions: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        function: val => console.log(val)
      },
      assignDialogName: 'Assign Gurus',
      assignArray: [
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user.png',
            guru: true
          },
          name: 'Jared Smith',
          position: 'Alerts Analyst',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user2.png',
            guru: true
          },
          name: 'Tillie Rose',
          position: 'Chargeback Analyst',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user3.png',
            guru: true
          },
          name: 'Agnes Oliver',
          position: 'Chargeback Analyst',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user4.png',
            guru: true
          },
          name: 'Elsie Lewis',
          position: 'Follow Up Lead',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user5.png',
            guru: true
          },
          name: 'Maurice Colon',
          position: 'Chargeback Analyst',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user6.png',
            guru: true
          },
          name: 'Joel Phillips',
          position: 'Follow Up Lead',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user7.png',
            guru: true
          },
          name: 'Jared Smith',
          position: 'Alerts Analyst',
          rowIncluded: false,
          role: 'Primary'
        },
        {
          icon: {
            type: 'image',
            initials: '',
            color: '',
            photo: 'assets/images/user8.png',
            guru: true
          },
          name: 'Viola McCormick',
          position: 'Follow Up Lead',
          rowIncluded: false,
          role: 'Primary'
        }
      ],
      selects: [
        {
          selected: 'All Statuses',
          options: ['All Statuses', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
