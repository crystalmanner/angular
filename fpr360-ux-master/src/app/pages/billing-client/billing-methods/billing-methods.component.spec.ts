import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingMethodsComponent } from './billing-methods.component';

describe('BillingMethodsComponent', () => {
  let component: BillingMethodsComponent;
  let fixture: ComponentFixture<BillingMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
