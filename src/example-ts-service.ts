export interface DependencyService {
  doDependencyStuff(arg1: string, arg2: number): string;
}

export class ExampleTsService {
  public static readonly EXAMPLE_OK = 'ok';

  constructor(private readonly dep: DependencyService) {}

  public doExampleStuff(input: number): boolean {
    return this.dep.doDependencyStuff(input.toString(), input) === ExampleTsService.EXAMPLE_OK;
  }
}
