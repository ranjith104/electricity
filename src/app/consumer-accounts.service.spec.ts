import { TestBed } from '@angular/core/testing';

import { ConsumerAccountsService } from './consumer-accounts.service';

describe('ConsumerAccountsService', () => {
  let service: ConsumerAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
