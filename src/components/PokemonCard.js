import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon, flipPokemon }) {
  const { name, hp, sprites, flipped} = pokemon
  const { front, back } = sprites

  return (
    <Card>
      <div onClick={()=>flipPokemon(pokemon.id)} >
        <div className="image">
          {flipped ? <img src={back} alt={name}/> : <img src={front} alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
