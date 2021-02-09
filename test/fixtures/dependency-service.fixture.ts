import { SinonStubbedInstance, stub } from 'sinon';

import { DependencyService } from '../../src';

export type DependencyServiceFixture = SinonStubbedInstance<DependencyService>;

export function dependencyServiceFixture(): DependencyServiceFixture {
  return {
    doDependencyStuff: stub()
  };
}
