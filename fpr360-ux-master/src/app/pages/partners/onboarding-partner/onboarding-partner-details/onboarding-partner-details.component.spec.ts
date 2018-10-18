import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPartnerDetailsComponent } from './onboarding-partner-details.component';

describe('OnboardingPartnerDetailsComponent', () => {
  let component: OnboardingPartnerDetailsComponent;
  let fixture: ComponentFixture<OnboardingPartnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPartnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
