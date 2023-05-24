const fetchPokemon = (pokemon) => {
   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      return pokemon = {
      name: data.forms[0].name,
      id: data.id,
      height: data.height,
      weight: data.weight
      }
      }
      );
      
}

class Pokedex {
  constructor(){
    this.seen = [];
  };

  catch(pokemon) {
     let data =fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
       pokemon = {
      name: data.forms[0].name,
      id: data.id,
      height: data.height,
      weight: data.weight
      }
      this.seen.push(data.name);
      return data
      }
      )
      return data
  }

  all(){
    return this.seen
  }
}

module.exports = Pokedex;