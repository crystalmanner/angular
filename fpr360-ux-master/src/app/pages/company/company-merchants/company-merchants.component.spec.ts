import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMerchantsComponent } from './company-merchants.component';

describe('CompanyMerchantsComponent', () => {
  let component: CompanyMerchantsComponent;
  let fixture: ComponentFixture<CompanyMerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
