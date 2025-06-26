import { TestBed } from '@angular/core/testing';

import { UnidadeFederativaServiceService } from './unidade-federativa-service.service';

describe('UnidadeFederativaServiceService', () => {
  let service: UnidadeFederativaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeFederativaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
