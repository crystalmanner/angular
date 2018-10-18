import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCargebackParametersComponent } from './settings-cargeback-parameters.component';

describe('SettingsCargebackParametersComponent', () => {
  let component: SettingsCargebackParametersComponent;
  let fixture: ComponentFixture<SettingsCargebackParametersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SettingsCargebackParametersComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCargebackParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
