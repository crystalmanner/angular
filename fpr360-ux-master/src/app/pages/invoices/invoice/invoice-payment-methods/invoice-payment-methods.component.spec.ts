import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentMethodsComponent } from './invoice-payment-methods.component';

describe('InvoicePaymentMethodsComponent', () => {
  let component: InvoicePaymentMethodsComponent;
  let fixture: ComponentFixture<InvoicePaymentMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePaymentMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
