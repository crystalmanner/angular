import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnboardingMerchantMidAccountsComponent } from './new-onboarding-merchant-mid-accounts.component';

describe('NewOnboardingMerchantMidAccountsComponent', () => {
  let component: NewOnboardingMerchantMidAccountsComponent;
  let fixture: ComponentFixture<NewOnboardingMerchantMidAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOnboardingMerchantMidAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnboardingMerchantMidAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
