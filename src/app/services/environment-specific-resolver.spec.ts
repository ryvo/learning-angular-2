import { TestBed, inject } from '@angular/core/testing';

import { EnvironmentSpecificResolverService } from './environment-specific-resolver';

describe('EnvironmentSpecificResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentSpecificResolver]
    });
  });

  it('should be created', inject([EnvironmentSpecificResolver], (service: EnvironmentSpecificResolver) => {
    expect(service).toBeTruthy();
  }));
});
