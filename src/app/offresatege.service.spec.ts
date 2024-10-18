import { TestBed } from '@angular/core/testing';

import { OffresategeService } from './offresatege.service';

describe('OffresategeService', () => {
  let service: OffresategeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffresategeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
