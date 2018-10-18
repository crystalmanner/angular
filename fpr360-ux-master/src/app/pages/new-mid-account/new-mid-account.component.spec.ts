import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMidAccountComponent } from './new-mid-account.component';

describe('NewMidAccountComponent', () => {
  let component: NewMidAccountComponent;
  let fixture: ComponentFixture<NewMidAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMidAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMidAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
