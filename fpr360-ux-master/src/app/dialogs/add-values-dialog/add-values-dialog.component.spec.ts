import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValuesDialogComponent } from './add-values-dialog.component';

describe('AddValuesDialogComponent', () => {
  let component: AddValuesDialogComponent;
  let fixture: ComponentFixture<AddValuesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddValuesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValuesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
