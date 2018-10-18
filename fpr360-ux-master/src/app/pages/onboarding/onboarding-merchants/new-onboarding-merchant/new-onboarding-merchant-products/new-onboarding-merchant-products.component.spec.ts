import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnboardingMerchantProductsComponent } from './new-onboarding-merchant-products.component';

describe('NewOnboardingMerchantProductsComponent', () => {
  let component: NewOnboardingMerchantProductsComponent;
  let fixture: ComponentFixture<NewOnboardingMerchantProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOnboardingMerchantProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnboardingMerchantProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
