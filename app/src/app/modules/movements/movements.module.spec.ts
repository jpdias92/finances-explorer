import { MovementsModule } from './movements.module';

describe('AlgoDocModule', () => {
  let algoDocModule: MovementsModule;

  beforeEach(() => {
    algoDocModule = new MovementsModule();
  });

  it('should create an instance', () => {
    expect(algoDocModule).toBeTruthy();
  });
});
