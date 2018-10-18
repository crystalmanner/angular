import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerActivityComponent } from './partner-activity.component';

describe('PartnerActivityComponent', () => {
  let component: PartnerActivityComponent;
  let fixture: ComponentFixture<PartnerActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
