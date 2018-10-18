import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPaymentGatewayComponent } from './settings-payment-gateway.component';

describe('SettingsPaymentGatewayComponent', () => {
  let component: SettingsPaymentGatewayComponent;
  let fixture: ComponentFixture<SettingsPaymentGatewayComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsPaymentGatewayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
