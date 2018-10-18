import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMerchantsComponent } from './onboarding-merchants.component';

describe('OnboardingMerchantsComponent', () => {
  let component: OnboardingMerchantsComponent;
  let fixture: ComponentFixture<OnboardingMerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
