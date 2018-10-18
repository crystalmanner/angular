import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnboardingMerchantDetailsComponent } from './new-onboarding-merchant-details.component';

describe('NewOnboardingMerchantDetailsComponent', () => {
  let component: NewOnboardingMerchantDetailsComponent;
  let fixture: ComponentFixture<NewOnboardingMerchantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOnboardingMerchantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnboardingMerchantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
