import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidHealthReportComponent } from './mid-health-report.component';

describe('MidHealthReportComponent', () => {
  let component: MidHealthReportComponent;
  let fixture: ComponentFixture<MidHealthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidHealthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidHealthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
