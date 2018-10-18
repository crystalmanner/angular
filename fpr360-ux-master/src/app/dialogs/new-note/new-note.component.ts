import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  noteData = {
    note: '',
    subject: ''
  };
  subjects = [
    {
      value: 'Status Update',
      viewValue: 'Status Update'
    },
    {
      value: 'Subject 2',
      viewValue: 'Subject 2'
    },
    {
      value: 'Subject 3',
      viewValue: 'Subject 3'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<NewNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog = () => this.dialogRef.close();

  saveFunction = () => {
    this.dialogRef.close(this.noteData);
  };

  ngOnInit() {}
}
