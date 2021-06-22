import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PokemonsList from "./PokemonsList";
import {IPokemon} from "../../interfaces";
import {API_PATH, WARNINGS} from "../../const";


let params = {
    limit: 10,
    offset: 200,
}
params.offset = Math.floor(Math.random() * 200)

const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${API_PATH.BASE}pokemon?limit=${params.limit}&offset=${params.offset}`);
            setPokemons(res.data.results)
        })();
    }, []);

    return (
        <div className="home">
            {pokemons.length > 0 ? (<PokemonsList pokemons={pokemons} />) :
                (<div className="text-center">{WARNINGS.NO_POKEMONS}</div>)}
        </div>
    )
}

export default Home;