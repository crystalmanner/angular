import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSettingsCrmComponent } from './new-settings-crm.component';

describe('NewSettingsCrmComponent', () => {
  let component: NewSettingsCrmComponent;
  let fixture: ComponentFixture<NewSettingsCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSettingsCrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSettingsCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
