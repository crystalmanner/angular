import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoughtDialogComponent } from './not-fought-dialog.component';

describe('NotFoughtDialogComponent', () => {
  let component: NotFoughtDialogComponent;
  let fixture: ComponentFixture<NotFoughtDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoughtDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoughtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
