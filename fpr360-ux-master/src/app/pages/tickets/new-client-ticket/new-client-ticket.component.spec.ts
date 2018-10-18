import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientTicketComponent } from './new-client-ticket.component';

describe('NewClientTicketComponent', () => {
  let component: NewClientTicketComponent;
  let fixture: ComponentFixture<NewClientTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClientTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClientTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
