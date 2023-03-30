import React from "react";

function NavBar({ onPokemonClick, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onPokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
