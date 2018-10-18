import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLineComponent } from './data-line.component';

describe('DataLineComponent', () => {
  let component: DataLineComponent;
  let fixture: ComponentFixture<DataLineComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DataLineComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
