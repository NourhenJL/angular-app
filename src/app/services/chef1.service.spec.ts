import { TestBed } from '@angular/core/testing';

import { Chef1Service } from './chef1.service';

describe('Chef1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Chef1Service = TestBed.get(Chef1Service);
    expect(service).toBeTruthy();
  });
});
