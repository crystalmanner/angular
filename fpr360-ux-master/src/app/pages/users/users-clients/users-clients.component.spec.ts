import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersClientsComponent } from './users-clients.component';

describe('UsersClientsComponent', () => {
  let component: UsersClientsComponent;
  let fixture: ComponentFixture<UsersClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
