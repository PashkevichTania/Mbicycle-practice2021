import React from "react";
import {IPokemon} from "../../interfaces";
import PokemonCard from "../PokemonPage/RenderPokemonCard";

const PokemonsList = ({pokemons}: { pokemons: IPokemon[]; }) => {

    const pokemons_list = pokemons.map((pokemon) => {
        return (
            <PokemonCard pokemon={pokemon} key={pokemon.name}/>
        );
    })

    return (
        <div className="cards-container">
            {pokemons_list}
        </div>
    )
}

export default PokemonsList