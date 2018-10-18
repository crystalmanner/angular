import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargebackDisputeComponent } from './chargeback-dispute.component';

describe('ChargebackDisputeComponent', () => {
  let component: ChargebackDisputeComponent;
  let fixture: ComponentFixture<ChargebackDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargebackDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargebackDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
