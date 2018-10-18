import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingRestrictionsComponent } from './onboarding-restrictions.component';

describe('OnboardingRestrictionsComponent', () => {
  let component: OnboardingRestrictionsComponent;
  let fixture: ComponentFixture<OnboardingRestrictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingRestrictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
