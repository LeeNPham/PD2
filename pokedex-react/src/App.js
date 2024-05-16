import React, { useState, useEffect } from "react";
import PokemonList from "./original-components/PokemonList";
import Pagination from "./original-components/Pagination";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();

    axios.get(currentPageUrl, { cancelToken: source.token }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
    }).catch(err => {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        // handle other errors
        console.error(err);
      }
    });

    return () => source.cancel('Operation canceled by the user.');

  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPreviousPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
      />
    </>
  );
}

export default App;
