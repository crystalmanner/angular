import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingBillingComponent } from './onboarding-billing.component';

describe('OnboardingBillingComponent', () => {
  let component: OnboardingBillingComponent;
  let fixture: ComponentFixture<OnboardingBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
