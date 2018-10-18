import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-text-field-dialog',
  templateUrl: './text-field-dialog.component.html',
  styleUrls: ['./text-field-dialog.component.scss']
})
export class TextFieldDialogComponent implements OnInit {
  readonly = false;
  itemName = '';

  constructor(
    public dialogRef: MatDialogRef<TextFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  saveFunction = () => {
    this.dialogRef.close(this.itemName);
  };
}
