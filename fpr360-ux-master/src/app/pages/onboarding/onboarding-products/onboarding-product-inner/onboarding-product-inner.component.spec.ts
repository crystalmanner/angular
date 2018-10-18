import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingProductInnerComponent } from './onboarding-product-inner.component';

describe('OnboardingProductInnerComponent', () => {
  let component: OnboardingProductInnerComponent;
  let fixture: ComponentFixture<OnboardingProductInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingProductInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingProductInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
