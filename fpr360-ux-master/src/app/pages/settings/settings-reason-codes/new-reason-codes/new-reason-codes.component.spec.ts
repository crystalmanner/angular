import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReasonCodesComponent } from './new-reason-codes.component';

describe('NewReasonCodesComponent', () => {
  let component: NewReasonCodesComponent;
  let fixture: ComponentFixture<NewReasonCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReasonCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReasonCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
