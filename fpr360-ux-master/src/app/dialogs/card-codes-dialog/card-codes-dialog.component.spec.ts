import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCodesDialogComponent } from './card-codes-dialog.component';

describe('CardCodesDialogComponent', () => {
  let component: CardCodesDialogComponent;
  let fixture: ComponentFixture<CardCodesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCodesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCodesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
