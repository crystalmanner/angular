import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMerchantComponent } from './onboarding-merchant.component';

describe('OnboardingMerchantComponent', () => {
  let component: OnboardingMerchantComponent;
  let fixture: ComponentFixture<OnboardingMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
