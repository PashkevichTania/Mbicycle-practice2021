import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CONST_VARS from "../../const";
import PokemonsList from "./PokemonsList";
import {IPokemon} from "../../interfaces";


let params = {
    limit: 10,
    offset: 200,
}
//params.limit = Math.floor(Math.random() * 25)
params.offset = Math.floor(Math.random() * 200)

const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${CONST_VARS.BASE_URL}pokemon?limit=${params.limit}&offset=${params.offset}`);
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