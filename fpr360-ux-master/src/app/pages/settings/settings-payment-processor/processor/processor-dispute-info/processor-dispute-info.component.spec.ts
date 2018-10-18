import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorDisputeInfoComponent } from './processor-dispute-info.component';

describe('ProcessorDisputeInfoComponent', () => {
  let component: ProcessorDisputeInfoComponent;
  let fixture: ComponentFixture<ProcessorDisputeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessorDisputeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorDisputeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
