import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMerchantMidAccountsComponent } from './onboarding-merchant-mid-accounts.component';

describe('OnboardingMerchantMidAccountsComponent', () => {
  let component: OnboardingMerchantMidAccountsComponent;
  let fixture: ComponentFixture<OnboardingMerchantMidAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMerchantMidAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMerchantMidAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
