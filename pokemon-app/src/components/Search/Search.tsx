import React, {useEffect, useState} from 'react'
import {IPokemonDetails} from "../../interfaces";
import axios from "axios";
import RenderPokemonPage from "../PokemonPage/RenderPokemonPage";
import {API_PATH, WARNINGS} from "../../const";


const Search = ({ name }: { name: string }) => {
    const [pokemon, setPokemon] = useState<IPokemonDetails>()
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${API_PATH.BASE}pokemon/${name}/`);
            setPokemon(res.data)
        })();
    }, [name]);

    return (
        <div className="pokemon-page">
            {pokemon ? (<RenderPokemonPage {...pokemon}/>) : (WARNINGS.NO_POKEMON)}
        </div>
    )
}

export default React.memo(Search)
