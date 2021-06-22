import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PokemonsList from "./PokemonsList";
import {IPokemonDetails} from "../../interfaces";
import {API_PATH, WARNINGS} from "../../const";


let params = {
    limit: 10,
    offset: 1000,
}
params.offset = Math.floor(Math.random() * 1000)

const Home = () => {
    const [store, setStore] = useState<IPokemonDetails[]>([])

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${API_PATH.BASE}pokemon?limit=${params.limit}&offset=${params.offset}`);
            res.data.results.forEach((pokemon: { url: string; }) => {
                (async () => {
                    const {url} = pokemon;
                    const res = await axios.get(url);
                    setStore((element) => [...element, res.data])
                })();
            })
        })()
    }, []);


    return (
        <div className="home">
            {store.length > 0 ? (<PokemonsList pokemonsDetails={store}/>) :
                (<div className="text-center">{WARNINGS.NO_POKEMONS}</div>)}
        </div>
    )
}

export default Home;