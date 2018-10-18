import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPaymentProcessorComponent } from './settings-payment-processor.component';

describe('SettingsPaymentProcessorComponent', () => {
  let component: SettingsPaymentProcessorComponent;
  let fixture: ComponentFixture<SettingsPaymentProcessorComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsPaymentProcessorComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPaymentProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
