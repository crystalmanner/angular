import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReasonCodesComponent } from './settings-reason-codes.component';

describe('SettingsReasonCodesComponent', () => {
  let component: SettingsReasonCodesComponent;
  let fixture: ComponentFixture<SettingsReasonCodesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsReasonCodesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsReasonCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
