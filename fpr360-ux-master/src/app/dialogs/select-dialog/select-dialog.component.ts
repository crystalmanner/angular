import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-select-dialog',
  templateUrl: './select-dialog.component.html',
  styleUrls: ['./select-dialog.component.scss']
})
export class SelectDialogComponent implements OnInit {
  array = [];
  value = '';
  constructor(
    public dialogRef: MatDialogRef<SelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.array = data.array;
  }

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  saveFunction = () => {
    this.dialogRef.close(this.value);
  };
}
