import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdMenuComponent } from './dd-menu.component';

describe('DdMenuComponent', () => {
  let component: DdMenuComponent;
  let fixture: ComponentFixture<DdMenuComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DdMenuComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DdMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
