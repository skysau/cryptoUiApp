import { TestBed } from '@angular/core/testing';

import { CriptoAppServiceService } from './cripto-app-service.service';

describe('CriptoAppServiceService', () => {
  let service: CriptoAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptoAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
