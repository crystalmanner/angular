import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidAccountComponent } from './mid-account.component';

describe('MidAccountComponent', () => {
  let component: MidAccountComponent;
  let fixture: ComponentFixture<MidAccountComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MidAccountComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MidAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
