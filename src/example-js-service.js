export class ExampleService {
  static get EXAMPLE_OK() { return 'ok'; }

  constructor(dep) {
    this.dep = dep
  }

  doExampleStuff(input) {
    return this.dep.doDependencyStuff(input.toString(), input) === ExampleService.EXAMPLE_OK;
  }
}
