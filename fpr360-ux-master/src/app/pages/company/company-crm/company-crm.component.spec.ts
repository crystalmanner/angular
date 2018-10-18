import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCrmComponent } from './company-crm.component';

describe('CompanyCrmComponent', () => {
  let component: CompanyCrmComponent;
  let fixture: ComponentFixture<CompanyCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
