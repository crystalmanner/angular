import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserNotificationComponent } from './new-user-notification.component';

describe('NewUserNotificationComponent', () => {
  let component: NewUserNotificationComponent;
  let fixture: ComponentFixture<NewUserNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
