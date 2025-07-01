import { TestBed } from '@angular/core/testing';

import { AuthenticacaoServiceService } from './authenticacao-service.service';

describe('AuthenticacaoServiceService', () => {
  let service: AuthenticacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
