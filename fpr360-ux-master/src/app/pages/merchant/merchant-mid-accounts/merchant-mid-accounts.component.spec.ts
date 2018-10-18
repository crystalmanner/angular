import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantMidAccountsComponent } from './merchant-mid-accounts.component';

describe('MerchantMidAccountsComponent', () => {
  let component: MerchantMidAccountsComponent;
  let fixture: ComponentFixture<MerchantMidAccountsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MerchantMidAccountsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantMidAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
