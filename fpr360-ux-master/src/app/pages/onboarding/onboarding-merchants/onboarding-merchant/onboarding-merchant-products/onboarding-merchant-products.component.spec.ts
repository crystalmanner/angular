import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMerchantProductsComponent } from './onboarding-merchant-products.component';

describe('OnboardingMerchantProductsComponent', () => {
  let component: OnboardingMerchantProductsComponent;
  let fixture: ComponentFixture<OnboardingMerchantProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMerchantProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMerchantProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
