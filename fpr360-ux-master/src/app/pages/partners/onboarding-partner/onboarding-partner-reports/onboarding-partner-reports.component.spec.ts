import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPartnerReportsComponent } from './onboarding-partner-reports.component';

describe('OnboardingPartnerReportsComponent', () => {
  let component: OnboardingPartnerReportsComponent;
  let fixture: ComponentFixture<OnboardingPartnerReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPartnerReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPartnerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
