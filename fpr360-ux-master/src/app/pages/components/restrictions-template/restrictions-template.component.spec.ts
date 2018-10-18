import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictionsTemplateComponent } from './restrictions-template.component';

describe('RestrictionsTemplateComponent', () => {
  let component: RestrictionsTemplateComponent;
  let fixture: ComponentFixture<RestrictionsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictionsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictionsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
