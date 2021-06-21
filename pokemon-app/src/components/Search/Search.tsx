import React, {useEffect, useState} from 'react'
import CONST_VARS from "../../const";
import {IPokemonDetails} from "../../interfaces";
import axios from "axios";
import RenderPokemonPage from "../PokemonPage/RenderPokemonPage";


const Search = ({ name }: { name: string }) => {
    const [pokemon, setPokemon] = useState<IPokemonDetails>()
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${CONST_VARS.BASE_URL}pokemon/${name}/`);
            setPokemon(res.data)
            console.log(res)
        })();
    }, [name]);

    return (
        <div className="pokemon-page">
            {pokemon ? (<RenderPokemonPage {...pokemon}/>) : (CONST_VARS.POKEMON_NOT_FOUND_TEXT)}
        </div>
    )
}

export default Search