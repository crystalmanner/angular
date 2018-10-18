import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioListItemsComponent } from './radio-list-items.component';

describe('RadioListItemsComponent', () => {
  let component: RadioListItemsComponent;
  let fixture: ComponentFixture<RadioListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
