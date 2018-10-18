import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdFilterComponent } from './dd-filter.component';

describe('DdFilterComponent', () => {
  let component: DdFilterComponent;
  let fixture: ComponentFixture<DdFilterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DdFilterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DdFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
