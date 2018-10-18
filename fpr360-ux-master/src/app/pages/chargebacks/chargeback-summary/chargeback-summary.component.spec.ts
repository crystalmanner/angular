import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargebackSummaryComponent } from './chargeback-summary.component';

describe('ChargebackSummaryComponent', () => {
  let component: ChargebackSummaryComponent;
  let fixture: ComponentFixture<ChargebackSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargebackSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargebackSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
