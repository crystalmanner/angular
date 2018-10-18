import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonCodesDialogComponent } from './reason-codes-dialog.component';

describe('ReasonCodesDialogComponent', () => {
  let component: ReasonCodesDialogComponent;
  let fixture: ComponentFixture<ReasonCodesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonCodesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonCodesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
