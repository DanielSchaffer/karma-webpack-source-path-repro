import { expect } from 'chai';

import { dependencyServiceFixture } from '../test/fixtures';

import { ExampleJsService } from './example-js-service';

describe('ExampleJsService', () => {
  let dep;
  let exampleService;

  beforeEach(() => {
    dep = dependencyServiceFixture();
    exampleService = new ExampleJsService(dep);
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
