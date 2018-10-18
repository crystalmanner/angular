import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-save-dashboard',
  templateUrl: './save-dashboard.component.html',
  styleUrls: ['./save-dashboard.component.scss']
})
export class SaveDashboardComponent implements OnInit {
  dashboardName: string;
  constructor(
    public dialogRef: MatDialogRef<SaveDashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
  closeDialog = () => this.dialogRef.close();
  saveFunction = () => {
    this.dialogRef.close(this.dashboardName);
  };
}
