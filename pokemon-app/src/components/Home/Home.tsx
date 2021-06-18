import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CONST_VARS from "../../const";
import PokemonsList from "./PokemonsList";
import {IPokemon} from "../../interfaces";

const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${CONST_VARS.BASE_URL}pokemon?limit=10&offset=200`);
            setPokemons(res.data.results)
        })();
    }, []);

    const listMarkup = pokemons.length > 0 ?
        (<PokemonsList pokemons={pokemons}/>) :
        (<div className="text-center">{CONST_VARS.NO_POKEMONS_TEXT}</div>)

    return (
        <div className="home">
            {listMarkup}
        </div>
    )
}

export default Home;