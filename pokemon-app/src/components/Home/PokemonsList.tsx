import React from "react";
import {IPokemonDetails} from "../../interfaces";
import PokemonCard from "../PokemonPage/RenderPokemonCard";

const PokemonsList = ({pokemonsDetails}: { pokemonsDetails: IPokemonDetails[]; }) => {

    const pokemons_list = pokemonsDetails.map((pokemonDetails) => {
        return (
            <PokemonCard pokemonDetails={pokemonDetails} key={pokemonDetails.name}/>
        );
    })

    return (
        <div className="cards-container">
            {pokemons_list}
        </div>
    )
}

export default PokemonsList