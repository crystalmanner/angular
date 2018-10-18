import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPartnerClientsComponent } from './onboarding-partner-clients.component';

describe('OnboardingPartnerClientsComponent', () => {
  let component: OnboardingPartnerClientsComponent;
  let fixture: ComponentFixture<OnboardingPartnerClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingPartnerClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPartnerClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
