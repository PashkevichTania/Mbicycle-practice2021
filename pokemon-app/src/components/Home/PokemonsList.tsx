import React from "react";
import {useSelector} from 'react-redux'
import {IPokemonDetails} from "../../interfaces";
import PokemonCard from "../PokemonPage/PokemonCard";
import {RootState} from "../../redux/rootReducer";

const PokemonsList = () => {

    let pokemonsDetails:IPokemonDetails[] = useSelector((state: RootState) => {
        return  state.pokemon.pokemonsDetails;
    });

    const pokemons_list = pokemonsDetails.map((pokemonDetails: IPokemonDetails) => {
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
