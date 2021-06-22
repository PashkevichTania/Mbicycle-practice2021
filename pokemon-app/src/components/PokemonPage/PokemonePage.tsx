import React, {useEffect, useState} from 'react'
import {WARNINGS} from "../../const";
import {IPokemonDetails} from "../../interfaces";
import RenderPokemonPage from "./RenderPokemonPage";


const PokemonPage = (props: { location: React.SetStateAction<IPokemonDetails | undefined>; }) => {

    const [pokemon, setPokemon] = useState<IPokemonDetails>()
    useEffect(() => {
        setPokemon(props.location);
    }, []);

    return (
        <div className="pokemon-page">
            {pokemon ? (<RenderPokemonPage {...pokemon}/>) : (WARNINGS.NO_POKEMON)}
        </div>
    )
}

export default PokemonPage;