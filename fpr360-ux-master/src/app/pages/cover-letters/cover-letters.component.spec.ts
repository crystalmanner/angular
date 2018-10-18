import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLettersComponent } from './cover-letters.component';

describe('CoverLettersComponent', () => {
  let component: CoverLettersComponent;
  let fixture: ComponentFixture<CoverLettersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CoverLettersComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
