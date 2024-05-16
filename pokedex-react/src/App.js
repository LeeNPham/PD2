import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios"



function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
  //This is an effect, it's something we want to happen and to rerender it
  axios.get(currentPageUrl).then(res => {
    setPokemon(res.data.results.map(p=> p.name))
  })
  },[currentPageUrl])






  return (
    // null
    <PokemonList pokemon={pokemon} />
    // <div>
    //   Hello World
    // </div>

  );
}

export default App;
