import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, flipPokemon }) {

  const renderPokemons = pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} flipPokemon={flipPokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
