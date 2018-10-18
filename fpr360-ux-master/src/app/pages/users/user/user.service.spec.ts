import { TestBed, inject } from '@angular/core/testing';

import { UserComponentService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserComponentService]
    });
  });

  it('should be created', inject([UserComponentService], (service: UserComponentService) => {
    expect(service).toBeTruthy();
  }));
});
