import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorRiskRuleComponent } from './processor-risk-rule.component';

describe('ProcessorRiskRuleComponent', () => {
  let component: ProcessorRiskRuleComponent;
  let fixture: ComponentFixture<ProcessorRiskRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessorRiskRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorRiskRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
