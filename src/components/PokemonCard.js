import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon
  const { front, back } = sprites
  const [clicked, setClicked] = useState(false)

  return (
    <Card>
      <div onClick={() => setClicked(clicked => !clicked)} >
        <div className="image">
          {clicked ? <img src={back} alt={name}/> : <img src={front} alt={name} />}
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
