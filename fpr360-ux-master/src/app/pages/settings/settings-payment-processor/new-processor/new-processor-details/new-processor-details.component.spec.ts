import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcessorDetailsComponent } from './new-processor-details.component';

describe('NewProcessorDetailsComponent', () => {
  let component: NewProcessorDetailsComponent;
  let fixture: ComponentFixture<NewProcessorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProcessorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcessorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
