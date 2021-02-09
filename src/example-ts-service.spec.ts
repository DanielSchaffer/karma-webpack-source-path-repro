import { expect } from 'chai';

import { dependencyServiceFixture, DependencyServiceFixture } from '../test/fixtures';

import { ExampleTsService } from './example-ts-service';

describe('ExampleTsService', () => {
  let dep: DependencyServiceFixture;
  let exampleService: ExampleTsService;

  beforeEach(() => {
    dep = dependencyServiceFixture();
    exampleService = new ExampleTsService(dep);
  });
  afterEach(() => {
    dep = undefined;
    exampleService = undefined;
  });

  describe('doExampleStuff', () => {
    it('passes the numeric input and its string representation to the dependency method', () => {
      exampleService.doExampleStuff(42);

      expect(dep.doDependencyStuff).to.have.been.calledWithExactly(42, 42);
      expect(dep.doDependencyStuff).to.have.been.calledWithExactly('42', 42);
    });

    it('returns true when the dependency method returns the string "ok"', () => {
      dep.doDependencyStuff.returns('ok');

      expect(exampleService.doExampleStuff(42)).to.be.true;
    });

    it('returns false when the dependency method returns a string other than "ok"', () => {
      dep.doDependencyStuff.returns('not ok');

      expect(exampleService.doExampleStuff(42)).to.be.false;
    });
  });
});
