import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {API_PATH, WARNINGS} from "../../const";
import {IPokemonDetails} from "../../interfaces";
import RenderPokemonPage from "./RenderPokemonPage";


const PokemonPage = (props: { match: { params: { pokemon_id: string; }; }; }) => {
    const id = props.match.params.pokemon_id;
    console.log(props)
    const [pokemon, setPokemon] = useState<IPokemonDetails>()
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${API_PATH.BASE}pokemon/${id}/`);
            setPokemon(res.data)
        })();

    }, []);

    return (
        <div className="pokemon-page">
            {pokemon ? (<RenderPokemonPage {...pokemon}/>) : (WARNINGS.NO_POKEMON)}
        </div>
    )
}

export default PokemonPage;