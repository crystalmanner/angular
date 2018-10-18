import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnboardingMerchantComponent } from './new-onboarding-merchant.component';

describe('NewOnboardingMerchantComponent', () => {
  let component: NewOnboardingMerchantComponent;
  let fixture: ComponentFixture<NewOnboardingMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOnboardingMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnboardingMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
