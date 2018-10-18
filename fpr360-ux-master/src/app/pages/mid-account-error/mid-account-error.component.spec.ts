import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidAccountErrorComponent } from './mid-account-error.component';

describe('MidAccountErrorComponent', () => {
  let component: MidAccountErrorComponent;
  let fixture: ComponentFixture<MidAccountErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidAccountErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidAccountErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
