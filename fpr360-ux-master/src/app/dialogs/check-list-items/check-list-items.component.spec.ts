import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListItemsComponent } from './check-list-items.component';

describe('CheckListItemsComponent', () => {
  let component: CheckListItemsComponent;
  let fixture: ComponentFixture<CheckListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
