import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.scss']
})
export class AddFieldDialogComponent implements OnInit {
  readonly = false;
  fieldData = {
    fieldName: '',
    fieldType: ''
  };
  fieldTypeOptions = [
    {
      value: 'Dropdown',
      viewValue: 'Dropdown'
    },
    {
      value: 'Text Field',
      viewValue: 'Text Field'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  closeDialog = () => this.dialogRef.close();

  createFunction = () => {
    this.dialogRef.close(this.fieldData);
  };
}
