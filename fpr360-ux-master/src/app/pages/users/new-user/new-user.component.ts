import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { CanComponentDeactivate } from '../../../services/can-deactivate-guard.service';
import { DialogService } from '../../../services/dialog.service';
import { AssignCompanyComponent } from '../../../dialogs/assign-company/assign-company.component';
import { RoleService } from '../../../services/data/role.service';
import { Role } from '../../../models/role';
import { CompanyService } from '../../../services/data/company.service';
import { Company } from '../../../models/company';
import { UserService } from '../../../services/data/user.service';
import { GuruUser, UserCompany, UserCompanyStatus } from '../../../models/user';
import * as _ from 'lodash';

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,24}$/;
const PHONE_REGEX = /^[0-9-_\s\+\-\()]{10,20}$/;

/**
 * Component for gathering and saving a new GURU user information.
 * 
 * @export
 * @class NewUserComponent
 * @implements {OnInit}
 * @implements {CanComponentDeactivate}
 */
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, CanComponentDeactivate {
  companyList: UserCompany[];
  form: FormGroup;
  phoneMask = ['+','1',' ','(',/[1-9]/, /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  readonly = false;
  roles: Observable<Role[]>;
  userName = ''; 
  userData = { avatar: '', initials: '', initialsColor: '', placeholder: 'Full name' };

  private readonly companyStatus = {
    'Primary': UserCompanyStatus.PRIMARY,
    'Secondary': UserCompanyStatus.SECONDARY
  };
  
  constructor(public dialog: MatDialog, private dialogService: DialogService, private formBuilder: FormBuilder, private router: Router, private companyService: CompanyService, private roleService: RoleService, private userService: UserService) {}

  /**
   * Initializes the component
   * 
   * @memberof NewUserComponent
   */
  ngOnInit() {
    // Create form...
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.pattern(EMAIL_REGEX)]],
      role: [{value: '', disabled: this.readonly}, [Validators.required]],
      phone_1: ['', [Validators.pattern(PHONE_REGEX)]],
      phone_2: ['', Validators.pattern(PHONE_REGEX)]    
    });

    // Request list of roles 
    this.roles = this.roleService.list();

    // Get list of companies and map to a user company list
    this.companyService.list(false).pipe(
      map( res => res.map(company => {
        const userCompany: UserCompany = Object.assign({}, company, {status: UserCompanyStatus.PRIMARY, statusDescription: 'Primary', included: false});
        return userCompany;
      }))
    ).subscribe(
      (list) => this.companyList = list
    );
  }

  /**
   * Returns false to abort the deactivation of this component.
   * 
   * @returns {Observable<boolean>} 
   * @memberof NewUserComponent
   */
  canDeactivate(): Observable<boolean> {
    if (this.form.dirty) {
      return this.dialogService.confirm('The user has not been created yet.  If you continue, your data will be lost.', 'Discard changes?');
    }

    return Observable.of(true);
  }

  get nameControl(): AbstractControl        { return this.form.get('name'); }
  get emailControl(): AbstractControl       { return this.form.get('email'); }
  get roleControl(): AbstractControl        { return this.form.get('role'); }
  get phone_1Control(): AbstractControl     { return this.form.get('phone_1'); }
  get phone_2Control(): AbstractControl     { return this.form.get('phone_2'); }
  get companyActions(): string[]            { return ['Remove']; }
  get companyStatusOptions(): string[]      { return _.keys(this.companyStatus); }
  get assignedCompanyList(): UserCompany[]  { 
    const companyList = _.cloneDeep(this.companyList.filter((company) => company['included']));
    return companyList.map(res => {
      delete res['included'];
      delete res['statusDescription'];
      return res;
    });
  }

  /**
   * Displays the assign company dialog to allow the user to choose which companies to assign to this guru.
   * 
   * @memberof NewUserComponent
   */
  assignCompany = () => {
    const dialogRef = this.dialog.open(AssignCompanyComponent, {
      data: {
        dataArray: this.companyList
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.companyList = result;
        this.form.markAsDirty();
      }
    });
  };

  /**
   * Unassign the company
   * 
   * @memberof NewUserComponent
   */
  unassignCompany = (company) => { company.included = false; this.form.markAsDirty(); };
  
  /**
   * Updates the name with the 'val' supplied. This is called when the user changes the name in the app-user-title component.
   * 
   * @memberof NewUserComponent
   */
  changeName = (val) => { this.nameControl.setValue(val); this.nameControl.updateValueAndValidity(); this.form.markAsDirty(); };

  /**
   * Updates the status associated with the given company. This is called when the user changes the status of a company from primary to secondary and vice versa.
   * 
   * @param {string} val The company status
   * @param {UserCompany} item The company whose status changed
   * @memberof NewUserComponent
   */
  changeCompanyStatus = (val, item) => { item.status = this.companyStatus[val]; item.statusDescription = val; this.form.markAsDirty(); };

  /**
   * Saves the new guru user and navigates back to the gurus list, if successful.
   * 
   * @memberof NewUserComponent
   */
  save() {
    const user: GuruUser = Object.assign({}, this.form.value, {companyList: this.assignedCompanyList, icon: {avatar: this.userData.avatar, color: this.userData.initialsColor, initials: this.userData.initials}});
    this.userService.create(user).subscribe(
      (res) => {
        this.form.markAsPristine();
        this.router.navigateByUrl('/users/gurus')
      },
      (err) => {
        console.log(err);        

        // TODO: Replace generic message with information provided in the err.
        this.dialogService.message('Unable to save user!', 'Error');
      }
    );
  }  
}
