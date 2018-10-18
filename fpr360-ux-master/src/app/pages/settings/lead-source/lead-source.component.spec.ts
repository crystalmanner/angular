import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSourceComponent } from './lead-source.component';

describe('LeadSourceComponent', () => {
  let component: LeadSourceComponent;
  let fixture: ComponentFixture<LeadSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
