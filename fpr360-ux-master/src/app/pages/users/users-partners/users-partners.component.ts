import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map } from 'rxjs/operators/map';
import { PartnerUser, UserType } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';
import { UserDialogComponent } from '../../../dialogs/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users-partners',
  templateUrl: './users-partners.component.html',
  styleUrls: ['./users-partners.component.scss']
})
export class UsersPartnersComponent implements OnInit {
  private partners: any[] = [];
  private observer: Observer<any[]> = null;

  // We cannot directly use the Observable returned from UserService.partners()
  // (for the table's data input) because then we will not be able to push  
  // updates to the partner list; e.g., when a new partner is added. Therefore, 
  // we need to create our own Observable and save the observer so that we can 
  // send push notification to the subscriber; i.e., table, when the partner list 
  // changes.
  partners$: Observable<any[]> = new Observable((observer) => { this.observer = observer; });
  config = {
    cols: [
      { name: 'Name' },
      { name: 'Email' },
      { name: 'Work' },
      { name: 'Ext.' },
      { name: 'Mobile' },
      { name: 'Skype ID' },
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
          name: 'Skype ID',
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
      },
      selects: [
        {
          selected: 'All Statuses',
          options: ['All Statuses', 'Option 2', 'Option 3'],
          function: val => console.log(val)
        }
      ]
    }
  };

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.userService.partners().pipe(
      map( res => res.map<any>(partner => {
        return Object.assign({}, partner, {
          icon: {
            type: 'initial',
            initials: partner.icon.initials,
            color: partner.icon.color
          },
          contact: partner.contact ? 'Check' : '',
          status: partner.active ? 'Active_label' : 'Inactive_label',
          pathTo: `/partner/${partner.id}/details`,
          rowIncluded: true
        })
      }))
    ).subscribe(
      (res) => this.observer.next(this.partners = res)
    );
  }

  addUserDialog = () => {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        dialogName: 'New Partner',
        userType: UserType.PARTNER,
        promptForCompany: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.partners.push(
          Object.assign({}, result, {
            icon: {
              type: 'initial',
              initials: result.icon.initials,
              color: result.icon.color
            },
            contact: result.contact ? 'Check' : '',
            status: result.active ? 'Active_label' : 'Inactive_label',
            pathTo: `/partner/${result.id}/details`,
            rowIncluded: true
          })
        );
        this.partners = [...this.partners];

        if (!this.observer.closed) {
          //
          //  Push new partner list to the subscriber
          //
          this.observer.next(this.partners);
        }
      }
    });
  };  
}
