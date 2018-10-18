import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDescriptorComponent } from './alert-descriptor.component';

describe('AlertDescriptorComponent', () => {
  let component: AlertDescriptorComponent;
  let fixture: ComponentFixture<AlertDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDescriptotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
