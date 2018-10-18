import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { IndicatorsService } from '../../../services/indicators.service';
import { HttpClient } from '@angular/common/http'; 
import { RadioListItemsComponent } from '../../../dialogs/radio-list-items/radio-list-items.component';
import { Observable } from 'rxjs/Observable';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() innerMenuItems;
  @Input() light: boolean = false;
  @Input() dlgName: string = "Merchant(s)"; //value changed by @input
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  dataArray = [];
  dialogName: string;
  addMenu : string;
  constructor(public dialog: MatDialog,
    private indicatorsService: IndicatorsService,
    private http: HttpClient) {
        this.getJSON().subscribe(data => {
        this.dataArray = data;
        this.addMenu = '';
      });
    }
    public getJSON(): Observable<any> {
      return this.http.get("../../assets/data/traderList.json")
    }

  ngOnInit() {}

  openDialog(dialog): void {
    
   this.indicatorsService.setClientsIndicator('true');
    
    if (dialog.name == this.dlgName) {
    
        //this.dialogName = "Merchant(s)";
        this.dialogName = this.dlgName;
        const dialogRef = this.dialog.open(RadioListItemsComponent, {
          data: {
            dataArray: this.dataArray,
            dialogName: this.dialogName
          },
          autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result != null) {
              //this.addMenu = result;
              this.change.emit(result);
              const newItem = {
                path : "",
                name : result
              };
              if(this.innerMenuItems.length < 5)
                this.innerMenuItems.push(newItem);
              else
              this.innerMenuItems[4] = newItem;
          }
        });
    }
  }

  selectPageSettings = val => {
    if(val == 'Traders'){
      this.openDialog('Traders');
    }
  };
}
