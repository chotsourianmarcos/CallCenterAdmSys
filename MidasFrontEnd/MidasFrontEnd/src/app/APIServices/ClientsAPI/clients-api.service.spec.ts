import { TestBed } from '@angular/core/testing';

import { ClientsAPIService } from './clients-api.service';

describe('ClientsAPIService', () => {
  let service: ClientsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
