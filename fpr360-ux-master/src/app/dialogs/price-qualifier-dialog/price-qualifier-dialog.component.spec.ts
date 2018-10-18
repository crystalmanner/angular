import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceQualifierDialogComponent } from './price-qualifier-dialog.component';

describe('PriceQualifierDialogComponent', () => {
  let component: PriceQualifierDialogComponent;
  let fixture: ComponentFixture<PriceQualifierDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceQualifierDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceQualifierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
