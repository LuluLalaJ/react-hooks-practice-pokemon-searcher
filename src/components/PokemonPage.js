import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const pokemonUrl = "http://localhost:3001/pokemon/"
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  //passing down directly at the moment; how else should I do?

  useEffect(() => {
    fetch(pokemonUrl)
    .then(r => r.json())
    .then(data => setPokemons(data))
  }, [])

  const displayedPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemons={setPokemons}/>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={displayedPokemons} />
    </Container>
  );
}

export default PokemonPage;
