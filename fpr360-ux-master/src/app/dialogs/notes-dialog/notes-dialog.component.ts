import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.scss']
})
export class NotesDialogComponent implements OnInit {
  notes = [];
  constructor(
    public dialogRef: MatDialogRef<NotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.notes = data.notes;
  }

  ngOnInit() {}
}
