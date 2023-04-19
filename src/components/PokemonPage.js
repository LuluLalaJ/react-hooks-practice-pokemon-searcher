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
    .then(data => {
      const updatedData = data.map( pokemon => {return {...pokemon, flipped: false}})
      setPokemons(updatedData)
    })
  }, [])

  function addNewPokemon(newPokemon) {
    const postRequest = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }

    fetch(pokemonUrl, postRequest)
    .then(r => r.json())
    .then(data => setPokemons([...pokemons, newPokemon]))
  }

  function flipPokemon(flippedId) {
    const afterFlip = pokemons.map(pokemon => {
      if (pokemon.id === flippedId) {
        let isFlipped = pokemon.flipped
        return {...pokemon, flipped: !isFlipped}
      } return pokemon
    })

    setPokemons(afterFlip)
  }

  const displayedPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={displayedPokemons} flipPokemon={flipPokemon}/>
    </Container>
  );
}

export default PokemonPage;
