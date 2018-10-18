import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingProductsComponent } from './onboarding-products.component';

describe('OnboardingProductsComponent', () => {
  let component: OnboardingProductsComponent;
  let fixture: ComponentFixture<OnboardingProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
