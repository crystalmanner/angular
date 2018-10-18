import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPartnersComponent } from './users-partners.component';

describe('UsersPartnersComponent', () => {
  let component: UsersPartnersComponent;
  let fixture: ComponentFixture<UsersPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
