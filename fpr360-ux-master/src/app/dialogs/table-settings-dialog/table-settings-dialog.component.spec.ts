import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSettingsDialogComponent } from './table-settings-dialog.component';

describe('TableSettingsDialogComponent', () => {
  let component: TableSettingsDialogComponent;
  let fixture: ComponentFixture<TableSettingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSettingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
