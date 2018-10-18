import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsIndustriesComponent } from './settings-industries.component';

describe('IndustriesComponent', () => {
  let component: SettingsIndustriesComponent;
  let fixture: ComponentFixture<SettingsIndustriesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsIndustriesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
