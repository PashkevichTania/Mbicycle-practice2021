import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
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
        (<PokemonsList pokemons={pokemons} />) :
        (<div className="text-center">No pokemons found</div>)

    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <div className="cards-container">
                {listMarkup}
            </div>
        </div>
    )
}

export default Home;