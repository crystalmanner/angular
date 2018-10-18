import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDuplicateComponent } from './alert-duplicate.component';

describe('AlertDuplicateComponent', () => {
  let component: AlertDuplicateComponent;
  let fixture: ComponentFixture<AlertDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
