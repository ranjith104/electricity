import { TestBed } from '@angular/core/testing';

import { CustomeraccService } from './customeracc.service';

describe('CustomeraccService', () => {
  let service: CustomeraccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeraccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
