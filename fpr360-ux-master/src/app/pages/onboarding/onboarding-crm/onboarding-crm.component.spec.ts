import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingCrmComponent } from './onboarding-crm.component';

describe('OnboardingCrmComponent', () => {
  let component: OnboardingCrmComponent;
  let fixture: ComponentFixture<OnboardingCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingCrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
