import React, { useState } from "react";
import PokemonList from "./PokemonList";



function App() {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])
  return (
    // null
    <PokemonList pokemon={pokemon} />
    // <div>
    //   Hello World
    // </div>

  );
}

export default App;
