import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDetailsFormComponent } from './merchant-details-form.component';

describe('MerchantDetailsFormComponent', () => {
  let component: MerchantDetailsFormComponent;
  let fixture: ComponentFixture<MerchantDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
