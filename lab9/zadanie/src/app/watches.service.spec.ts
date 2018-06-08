import { TestBed, inject } from '@angular/core/testing';

import { WatchesService } from './watches.service';

describe('WatchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchesService]
    });
  });

  it('should be created', inject([WatchesService], (service: WatchesService) => {
    expect(service).toBeTruthy();
  }));
});
