import React from "react";
import {useSelector} from 'react-redux'
import {IPokemonDetails} from "../../interfaces";
import PokemonCard from "../PokemonPage/PokemonCard";
import {RootState} from "../../redux/rootReducer";
import {pokemonDetailsSelector} from "../../redux/selectors";

const PokemonsList = () => {

    let pokemonsDetails:IPokemonDetails[] = useSelector(pokemonDetailsSelector);

    return (
        <div className="cards-container">
            {pokemonsDetails.map((pokemonDetails: IPokemonDetails) =>
                (<PokemonCard pokemonDetails={pokemonDetails} key={pokemonDetails.name}/>)
            )}
        </div>
    )
}

export default PokemonsList
