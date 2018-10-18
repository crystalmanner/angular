import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPartnerComponent } from './onboarding-partner.component';

describe('OnboardingPartnerComponent', () => {
  let component: OnboardingPartnerComponent;
  let fixture: ComponentFixture<OnboardingPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
