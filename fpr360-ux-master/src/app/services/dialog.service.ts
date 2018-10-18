import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs/Observable';

/**
 * Confirmation Dialog - consumers of the dialog may specify the title and message
 * to display in the dialog.
 * 
 * @export
 * @class ConfirmationDialogComponent
 */
@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <div class="dialog-content">
    <header *ngIf="title">
      <h3>{{ title }}</h3>
    </header>
    <section>
      <p>{{ message }}</p>
    </section>
    <footer>
      <div class="line-item">
        <div class="right-item">
          <button mat-raised-button color="primary" (click)="close(false)">No</button>
          <button mat-raised-button color="primary" (click)="close(true)">Yes</button>
        </div>
      </div>
    </footer>
    </div>  
  `
})
export class ConfirmationDialogComponent {
  title: string;
  message: string;  
  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title || '';
    this.message = data.message || 'Are you sure?';
  }

  public close(ret: boolean) {
    this.dialogRef.close(ret);
  }
}

/**
 * Message Dialog - consumers of the dialog may specify the title and message
 * to display in the dialog.
 * 
 * @export
 * @class MessageDialogComponent
 */
@Component({
  selector: 'app-message-dialog',
  template: `
    <div class="dialog-content">
    <header *ngIf="title">
      <h3>{{ title }}</h3>
    </header>
    <section>
      <p>{{ message }}</p>
    </section>
    <footer>
      <div class="line-item">
        <div class="right-item">
          <button mat-raised-button color="primary" (click)="close()">OK</button>
        </div>
      </div>
    </footer>
    </div>  
  `
})
export class MessageDialogComponent {
  title: string;
  message: string;  
  constructor(private dialogRef: MatDialogRef<MessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title || '';
    this.message = data.message || '';
  }

  public close() {
    this.dialogRef.close();
  }
}

/**
 * Dialog Service to easily invoke customized dialogs for confirmation (and other dialogs to be
 * added in the future).
 * 
 * @export
 * @class DialogService
 */
@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  /**
   * Returns an Observable to the user's true/false response.
   * 
   * @param {string} message Message to display in the confirmation dialog
   * @param {string} [title] Optional title to display in the confirmation dialog
   * @returns {Observable<boolean>} 
   * @memberof DialogService
   */
  confirm(message: string, title?: string): Observable<boolean> {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: message, title: title}
    });

    return dialog.afterClosed();
  };  

  /**
   * Returns an Observable to inform when the user closes the dialog.
   * 
   * @param {string} message Message to display in the message dialog
   * @param {string} [title] Optional title to display in the confirmation dialog
   * @returns {Observable<void>} 
   * @memberof DialogService
   */
  message(message: string, title?: string): Observable<void> {
    const dialog = this.dialog.open(MessageDialogComponent, {
      data: {message: message, title: title}
    });

    return dialog.afterClosed();
  }
}
