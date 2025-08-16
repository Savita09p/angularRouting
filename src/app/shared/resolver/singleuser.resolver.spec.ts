import { TestBed } from '@angular/core/testing';

import { SingleuserResolver } from './singleuser.resolver';

describe('SingleuserResolver', () => {
  let resolver: SingleuserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SingleuserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
