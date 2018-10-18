import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMerchantDetailsComponent } from './onboarding-merchant-details.component';

describe('OnboardingMerchantDetailsComponent', () => {
  let component: OnboardingMerchantDetailsComponent;
  let fixture: ComponentFixture<OnboardingMerchantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMerchantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMerchantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
