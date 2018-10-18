import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcessorDisputeInfoComponent } from './new-processor-dispute-info.component';

describe('NewProcessorDisputeInfoComponent', () => {
  let component: NewProcessorDisputeInfoComponent;
  let fixture: ComponentFixture<NewProcessorDisputeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProcessorDisputeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcessorDisputeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
