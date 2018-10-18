import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerDetaisComponent } from './partner-detais.component';

describe('PartnerDetaisComponent', () => {
  let component: PartnerDetaisComponent;
  let fixture: ComponentFixture<PartnerDetaisComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PartnerDetaisComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
