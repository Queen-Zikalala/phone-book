import { TestBed } from '@angular/core/testing';

import { PhoneBookResolver } from './phone-book.resolver';

describe('PhoneBookResolver', () => {
  let resolver: PhoneBookResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhoneBookResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
