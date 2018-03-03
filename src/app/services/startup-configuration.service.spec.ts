import { TestBed, inject } from '@angular/core/testing';

import { StartupConfigurationService } from './startup-configuration.service';

describe('StartupConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartupConfigurationService]
    });
  });

  it('should be created', inject([StartupConfigurationService], (service: StartupConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
