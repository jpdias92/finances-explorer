import { MovementsModule } from './movements.module';

describe('MovementsModule', () => {
  let movementsModule: MovementsModule;

  beforeEach(() => {
    movementsModule = new MovementsModule();
  });

  it('should create an instance', () => {
    expect(movementsModule).toBeTruthy();
  });
});
