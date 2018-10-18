import { TestBed, inject } from '@angular/core/testing';

import { TableFilterService } from './table-filter.service';

describe('TableFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableFilterService]
    });
  });

  it('should be created', inject([TableFilterService], (service: TableFilterService) => {
    expect(service).toBeTruthy();
  }));
});
