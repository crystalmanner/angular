import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcessorRiskRuleComponent } from './new-processor-risk-rule.component';

describe('NewProcessorRiskRuleComponent', () => {
  let component: NewProcessorRiskRuleComponent;
  let fixture: ComponentFixture<NewProcessorRiskRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProcessorRiskRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProcessorRiskRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
