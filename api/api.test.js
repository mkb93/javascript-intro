const Pokedex = require('./api')
pokedex = new Pokedex
describe('Pokedex', () => {
  it('returns a promise of the useful pokemon data', (done) => {
    pokedex.catch('charizard')
      .then((pokemon) => {
        expect(pokemon.name).toBe('charizard');
        done();
      });
  });
  it('returns a promise of the useful pokemon data', () => {
        expect(pokedex.all()).toEqual(['charizard']);
      });
      it('returns a promise of the useful pokemon data', (done) => {
        pokedex.catch('pikachu')
          .then((pokemon) => {
            expect(pokemon.name).toBe('pikachu');
            done();
          });
      });
      it('returns a promise of the useful pokemon data', () => {
        expect(pokedex.all()).toEqual(['charizard', 'pikachu']);
      });
  });
