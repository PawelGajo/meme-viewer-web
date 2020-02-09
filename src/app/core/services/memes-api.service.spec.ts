import { TestBed } from '@angular/core/testing';

import { MemesApiService } from './memes-api.service';

describe('MemesApiService', () => {
  let service: MemesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
