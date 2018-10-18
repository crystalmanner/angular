import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCrmComponent } from './settings-crm.component';

describe('SettingsCrmComponent', () => {
  let component: SettingsCrmComponent;
  let fixture: ComponentFixture<SettingsCrmComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsCrmComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
