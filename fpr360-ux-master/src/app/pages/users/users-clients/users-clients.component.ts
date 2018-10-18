import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map } from 'rxjs/operators/map';
import { ClientUser, UserType } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';
import { UserDialogComponent } from '../../../dialogs/user-dialog/user-dialog.component';
import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-users-clients',
  templateUrl: './users-clients.component.html',
  styleUrls: ['./users-clients.component.scss']
})
export class UsersClientsComponent implements OnInit {  
  private clients: any[] = [];
  private observer: Observer<any[]> = null;

  // We cannot directly use the Observable returned from UserService.clients()
  // (for the table's data input) because then we will not be able to push  
  // updates to the client list; e.g., when a new client is added. Therefore, 
  // we need to create our own Observable and save the observer so that we can 
  // send push notification to the subscriber; i.e., table, when the client list 
  // changes.
  clients$: Observable<any[]> = new Observable((observer) => { this.observer = observer; });
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
    this.userService.clients().pipe(
      map( res => res.map<any>(client => {
        return Object.assign({}, client, {
          icon: {
            type: 'initial',
            initials: client.icon.initials,
            color: client.icon.color
          },
          contact: client.contact ? 'Check' : '',
          status: client.active ? 'Active_label' : 'Inactive_label',
          pathTo: `/client/${client.id}/details`,
          rowIncluded: true
        })
      }))
    ).subscribe(
      (res) => this.observer.next(this.clients = res)
    );    
  }

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };

  addUserDialog = () => {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {
        dialogName: 'New User',
        userType: UserType.CLIENT,
        promptForCompany: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clients.push(
          Object.assign({}, result, {
            icon: {
              type: 'initial',
              initials: result.icon.initials,
              color: result.icon.color
            },
            contact: result.contact ? 'Check' : '',
            status: result.active ? 'Active_label' : 'Inactive_label',
            pathTo: `/client/${result.id}/details`,
            rowIncluded: true
          })
        );
        this.clients = [...this.clients];

        if (!this.observer.closed) {
          //
          //  Push new client list to the subscriber
          //
          this.observer.next(this.clients);
        }
      }
    });
  };
}
