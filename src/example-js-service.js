export class ExampleJsService {
  static get EXAMPLE_OK() { return 'ok'; }

  constructor(dep) {
    this.dep = dep
  }

  doExampleStuff(input) {
    return this.dep.doDependencyStuff(input.toString(), input) === ExampleJsService.EXAMPLE_OK;
  }
}
