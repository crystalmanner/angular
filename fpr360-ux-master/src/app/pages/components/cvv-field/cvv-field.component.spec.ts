import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvvFieldComponent } from './cvv-field.component';

describe('CvvFieldComponent', () => {
  let component: CvvFieldComponent;
  let fixture: ComponentFixture<CvvFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvvFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvvFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
