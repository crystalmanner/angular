import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDashboardComponent } from './save-dashboard.component';

describe('SaveDashboardComponent', () => {
  let component: SaveDashboardComponent;
  let fixture: ComponentFixture<SaveDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
