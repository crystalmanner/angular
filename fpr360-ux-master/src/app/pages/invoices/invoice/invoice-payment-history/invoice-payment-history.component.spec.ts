import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaymentHistoryComponent } from './invoice-payment-history.component';

describe('InvoicePaymentHistoryComponent', () => {
  let component: InvoicePaymentHistoryComponent;
  let fixture: ComponentFixture<InvoicePaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
