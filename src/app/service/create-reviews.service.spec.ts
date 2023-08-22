import { TestBed } from '@angular/core/testing';

import { CreateReviewsService } from './create-reviews.service';

describe('CreateReviewsService', () => {
  let service: CreateReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
