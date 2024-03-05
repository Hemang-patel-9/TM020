import { TestBed } from '@angular/core/testing';

import { ApiMsgService } from './api-msg.service';

describe('ApiMsgService', () => {
  let service: ApiMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
