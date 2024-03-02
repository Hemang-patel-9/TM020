import { TestBed } from '@angular/core/testing';

import { WelcomeUserPageService } from './welcome-user-page.service';

describe('WelcomeUserPageService', () => {
  let service: WelcomeUserPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeUserPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
