import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [pokemonData, setPokemonData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  function createNewPokemon(e) {
    const key = e.target.name
    const val = e.target.value
    setPokemonData({
      ...pokemonData,
      [key]: val
    })
  }

  function submitPokemons(e) {
    e.preventDefault()
    const formatedPokemon = {
      name: pokemonData.name,
      hp: Number(pokemonData.hp),
      sprites: {
        front: pokemonData.frontUrl,
        back: pokemonData.backUrl
      }
    }

    addNewPokemon(formatedPokemon)
    setPokemonData({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitPokemons}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={createNewPokemon} value={pokemonData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={createNewPokemon} value={pokemonData.hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={createNewPokemon}
            value={pokemonData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={createNewPokemon}
            value={pokemonData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
