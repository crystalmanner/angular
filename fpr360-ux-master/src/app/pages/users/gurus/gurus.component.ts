import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { GuruUser } from '../../../models/user';
import { UserService } from '../../../services/data/user.service';
import { UploadDialogComponent } from '../../../dialogs/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-gurus',
  templateUrl: './gurus.component.html',
  styleUrls: ['./gurus.component.scss']
})
export class GurusComponent implements OnInit {
  config = {
    cols: [
      { name: 'Name' },
      { name: 'Role' },
      { name: 'Email' },
      { name: 'Phone' },
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
          width: 0,
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
          name: 'Phone',
          included: true,
          rightAlign: false,
          width: 160,
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
  gurus$: Observable<any[]> = null;

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.gurus$ = this.userService.gurus().pipe(
      map( res => res.map<any>(guru => {
        return Object.assign({}, guru, {
          icon: {
            type: guru.icon.avatar ? 'image' : 'initial',
            photo: guru.icon.avatar,
            guru: true
          },
          role: guru.role.name,
          phone: guru.phone_1,
          status: guru.active ? 'Active_label' : 'Inactive_label',
          pathTo: `/profile/${guru.id}/details`,
          rowIncluded: true
        })
      }))
    );
  }

  uploadDialog = () => {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {});
  };
}
