import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcessorComponent } from './new-processor.component';

describe('NewProcessorComponent', () => {
  let component: NewProcessorComponent;
  let fixture: ComponentFixture<NewProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
