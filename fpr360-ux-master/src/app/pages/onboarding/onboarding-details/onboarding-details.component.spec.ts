import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDetailsComponent } from './onboarding-details.component';

describe('OnboardingDetailsComponent', () => {
  let component: OnboardingDetailsComponent;
  let fixture: ComponentFixture<OnboardingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
