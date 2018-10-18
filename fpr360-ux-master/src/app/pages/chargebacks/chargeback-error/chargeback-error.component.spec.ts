import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargebackErrorComponent } from './chargeback-error.component';

describe('ChargebackErrorComponent', () => {
  let component: ChargebackErrorComponent;
  let fixture: ComponentFixture<ChargebackErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargebackErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargebackErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
