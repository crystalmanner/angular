import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmFormComponent } from './crm-form.component';

describe('CrmFormComponent', () => {
  let component: CrmFormComponent;
  let fixture: ComponentFixture<CrmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
