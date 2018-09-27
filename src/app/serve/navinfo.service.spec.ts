import { TestBed, inject } from '@angular/core/testing';

import { NavinfoService } from './navinfo.service';

describe('NavinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavinfoService]
    });
  });

  it('should be created', inject([NavinfoService], (service: NavinfoService) => {
    expect(service).toBeTruthy();
  }));
});
