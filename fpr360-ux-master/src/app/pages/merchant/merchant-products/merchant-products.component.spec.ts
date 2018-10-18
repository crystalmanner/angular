import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantProductsComponent } from './merchant-products.component';

describe('MerchantProductsComponent', () => {
  let component: MerchantProductsComponent;
  let fixture: ComponentFixture<MerchantProductsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MerchantProductsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
