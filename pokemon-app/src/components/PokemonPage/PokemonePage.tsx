import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CONST_VARS from "../../const";
import AbilitiesList from "./AbilitiesList";
import StatsList from "./StatsList";
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

    const result = pokemon ? (
        <RenderPokemonPage {...pokemon}/>
    ) : ("Pokemon not found")

    return (
        <div className="pokemon-page">{result}</div>
    )
}

export default PokemonPage;