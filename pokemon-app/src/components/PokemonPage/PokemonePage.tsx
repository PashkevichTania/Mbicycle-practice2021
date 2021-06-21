import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CONST_VARS from "../../const";
import {IPokemonDetails} from "../../interfaces";
import RenderPokemonPage from "./RenderPokemonPage";


const PokemonPage = (props: { match: { params: { pokemon_id: string; }; }; }) => {
    const id = props.match.params.pokemon_id;
    console.log(props)
    const [pokemon, setPokemon] = useState<IPokemonDetails>()
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${CONST_VARS.BASE_URL}pokemon/${id}/`);
            setPokemon(res.data)
        })();

    }, []);

    return (
        <div className="pokemon-page">
            {pokemon ? (<RenderPokemonPage {...pokemon}/>) : (CONST_VARS.POKEMON_NOT_FOUND_TEXT)}
        </div>
    )
}

export default PokemonPage;