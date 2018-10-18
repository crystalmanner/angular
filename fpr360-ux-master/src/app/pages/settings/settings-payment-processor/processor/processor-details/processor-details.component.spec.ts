import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorDetailsComponent } from './processor-details.component';

describe('ProcessorDetailsComponent', () => {
  let component: ProcessorDetailsComponent;
  let fixture: ComponentFixture<ProcessorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
