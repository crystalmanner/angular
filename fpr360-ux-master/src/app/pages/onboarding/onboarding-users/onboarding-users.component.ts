import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IndicatorsService } from '../../../services/indicators.service';
import { UserDialogComponent } from '../../../dialogs/user-dialog/user-dialog.component';

@Component({
  selector: 'app-onboarding-users',
  templateUrl: './onboarding-users.component.html',
  styleUrls: ['./onboarding-users.component.scss']
})
export class OnboardingUsersComponent implements OnInit {
  onboardingUsersData = {
    rows: [
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'JW',
          color: 'rgb(87,177,87)',
          photo: ''
        },
        name: 'Josie Walsh',
        role: 'Alerts Manager',
        email: 'breanne_schumm@jarrod.net',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: 'Check',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'CD',
          color: 'rgb(140,197,83)',
          photo: ''
        },
        name: 'Corey Dennis',
        role: 'Alerts Manager',
        email: 'breanne_schumm@jarrod.net',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: 'Check',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'LC',
          color: 'rgb(87,177,87)',
          photo: ''
        },
        name: 'Lottie Crawford',
        role: 'Alerts Manager',
        email: 'breanne_schumm@jarrod.net',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: '',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'EW',
          color: 'rgb(253,88,53)',
          photo: ''
        },
        name: 'Ernest Wade',
        role: 'Alerts Manager',
        email: 'roob_rogers@klocko.org',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: '',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'BR',
          color: 'rgb(150,193,32)',
          photo: ''
        },
        name: 'Billy Rhodes',
        role: 'Alerts Manager',
        email: 'romaguera.maude@hotmail.com',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: 'Check',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'MG',
          color: 'rgb(153,43,174)',
          photo: ''
        },
        name: 'Matilda Gregory',
        role: 'Alerts Manager',
        email: 'quinten_runolfsson@conn.io',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: '',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'PH',
          color: 'rgb(54,146,243)',
          photo: ''
        },
        name: 'Paul Hubbard',
        role: 'Alerts Manager',
        email: 'jose.collier@schuppe.ca',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: 'Check',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'ES',
          color: 'rgb(253,88,53)',
          photo: ''
        },
        name: 'Edgar Schwartz',
        role: 'Alerts Manager',
        email: 'phyllis_grady@batz.io',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: 'Check',
        status: 'Inactive_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'OK',
          color: 'rgb(39,187,209)',
          photo: ''
        },
        name: 'Oscar Kim',
        role: 'Alerts Manager',
        email: 'boyer.kallie@austin.name',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: 'Check',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      },
      {
        icon: {
          flag: false,
          iconName: '',
          iconColor: '',
          type: 'initial',
          initials: 'AM',
          color: 'rgb(87,177,87)',
          photo: ''
        },
        name: 'Albert Morton',
        role: 'Alerts Manager',
        email: 'shanahan_furman@trever.org',
        work: '+1 484-284-8274',
        ext: '384',
        mobile: '+1 484-284-8274',
        contact: '',
        status: 'Active_label',
        pathTo: '/user/details',
        rowIncluded: true
      }
    ],
    cols: [
      { name: 'Name' },
      { name: 'Role' },
      { name: 'Email' },
      { name: 'Work' },
      { name: 'Ext.' },
      { name: 'Mobile' },
      { name: 'Contact' },
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
          leftFixed: true
        },
        {
          name: 'Role',
          included: true,
          rightAlign: false,
          width: 128,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Email',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Work',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Ext',
          included: true,
          rightAlign: false,
          width: 96,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Mobile',
          included: true,
          rightAlign: false,
          width: 0,
          bold: false,
          leftFixed: false
        },
        {
          name: 'Contact',
          included: true,
          rightAlign: false,
          width: 96,
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
      }
    }
  };

  user: any;
  dataArray: any;
  dialogName: string;

  constructor(
    public dialog: MatDialog,
    private indicatorsService: IndicatorsService
  ) {}

  ngOnInit() {}

  addUserDialog = () => {
    this.dialogName = 'New User';
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        oneUser: this.user,
        dialogName: this.dialogName
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataArray = result;
        this.onboardingUsersData.rows.push({
          icon: {
            flag: false,
            iconName: '',
            iconColor: '',
            type: 'initial',
            initials: this.dataArray.initials,
            color: this.dataArray.color,
            photo: ''
          },
          name: this.dataArray.name,
          role: this.dataArray.role,
          email: this.dataArray.email,
          work: this.dataArray.work,
          ext: this.dataArray.ext,
          mobile: this.dataArray.mobile,
          contact: this.dataArray.contact,
          status: 'Active_label',

          pathTo: '/user/details',
          rowIncluded: true
        });
        this.onboardingUsersData.rows = [...this.onboardingUsersData.rows];
      }
    });
  };
}
