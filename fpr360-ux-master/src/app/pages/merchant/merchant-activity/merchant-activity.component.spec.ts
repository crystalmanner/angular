import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantActivityComponent } from './merchant-activity.component';

describe('MerchantActivityComponent', () => {
  let component: MerchantActivityComponent;
  let fixture: ComponentFixture<MerchantActivityComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MerchantActivityComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
