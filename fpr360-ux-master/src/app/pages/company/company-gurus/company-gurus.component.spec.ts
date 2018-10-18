import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGurusComponent } from './company-gurus.component';

describe('CompanyGurusComponent', () => {
  let component: CompanyGurusComponent;
  let fixture: ComponentFixture<CompanyGurusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGurusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
