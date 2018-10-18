import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWidgetComponent } from './mini-widget.component';

describe('MiniWidgetComponent', () => {
  let component: MiniWidgetComponent;
  let fixture: ComponentFixture<MiniWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
