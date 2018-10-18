import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTicketComponent } from './client-ticket.component';

describe('ClientTicketComponent', () => {
  let component: ClientTicketComponent;
  let fixture: ComponentFixture<ClientTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
