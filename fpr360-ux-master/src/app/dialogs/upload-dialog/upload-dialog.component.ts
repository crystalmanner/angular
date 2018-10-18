import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  oneDoc = false;
  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    data ? (this.oneDoc = data.uploadDocument) : null;
  }

  ngOnInit() {}

  closeDialog = () => {
    this.dialogRef.close();
  };
  upload = () => {
    this.dialogRef.close();
  };
}
