import { TestBed } from '@angular/core/testing';

import { UserValidateServiceService } from './user-validate-service.service';

describe('UserValidateServiceService', () => {
  let service: UserValidateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserValidateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
