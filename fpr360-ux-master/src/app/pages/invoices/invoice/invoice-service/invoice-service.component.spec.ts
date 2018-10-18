import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceServiceComponent } from './invoice-service.component';

describe('InvoiceServiceComponent', () => {
  let component: InvoiceServiceComponent;
  let fixture: ComponentFixture<InvoiceServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
