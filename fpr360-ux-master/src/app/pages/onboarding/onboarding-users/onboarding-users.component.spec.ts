import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingUsersComponent } from './onboarding-users.component';

describe('OnboardingUsersComponent', () => {
  let component: OnboardingUsersComponent;
  let fixture: ComponentFixture<OnboardingUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
