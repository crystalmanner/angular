import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnboardingProductComponent } from './new-onboarding-product.component';

describe('NewOnboardingProductComponent', () => {
  let component: NewOnboardingProductComponent;
  let fixture: ComponentFixture<NewOnboardingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOnboardingProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnboardingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
