import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-radio-list-items',
  templateUrl: './radio-list-items.component.html',
  styleUrls: ['./radio-list-items.component.scss']
})
export class RadioListItemsComponent implements OnInit {
  search: string;
  array: any;
  returnValue: string;

  constructor(
    public dialogRef: MatDialogRef<RadioListItemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.array = data.dataArray;
    this.returnValue = data.value;
  }

  closeDialog = () => this.dialogRef.close();

  searchFunction = val =>
    typeof val === 'string' ? (this.search = val) : null;

  saveFunction = () => {
    this.dialogRef.close(this.returnValue);
  };

  ngOnInit() {}
}
