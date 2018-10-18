import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPageComponent } from './widget-page.component';

describe('WidgetPageComponent', () => {
  let component: WidgetPageComponent;
  let fixture: ComponentFixture<WidgetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
