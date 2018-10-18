import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingGurusComponent } from './onboarding-gurus.component';

describe('OnboardingGurusComponent', () => {
  let component: OnboardingGurusComponent;
  let fixture: ComponentFixture<OnboardingGurusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingGurusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingGurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
