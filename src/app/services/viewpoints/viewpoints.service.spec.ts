import { TestBed } from '@angular/core/testing';

import { ViewpointsService } from './viewpoints.service';

describe('ViewpointsService', () => {
  let service: ViewpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
