import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertResolveComponent } from './alert-resolve.component';

describe('AlertResolveComponent', () => {
  let component: AlertResolveComponent;
  let fixture: ComponentFixture<AlertResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
