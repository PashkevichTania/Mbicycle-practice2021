import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CONST_VARS from "../../const";

interface ISubmitResult {
    name: string;
    url: string;
}


const Home = () => {


    const [pokemons, setPokemons] = useState<ISubmitResult[]>([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${CONST_VARS.BASE_URL}pokemon?limit=10&offset=200`);
            setPokemons(res.data.results)
            console.log(res.data.results)
        })();
    }, []);


    const listMarkup = pokemons.length > 0 ? (
        pokemons.map(pokemon => {
            const {name} = pokemon;
            const {url} = pokemon;
            const id = ((url.match(/\/\d+\//))?.toString().match(/\d+/)?.toString())
            const pokemonImage = `${CONST_VARS.IMG_URL}${id}.png`
            return (
                <Link to={`/pokemon/${id}`}>
                    <div className="pokemon-card" key={id}>
                        <div className="card-body">
                            <img src={pokemonImage} alt="pokemon image"/>
                            <p>id: {id}</p>
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </Link>
            );
        })
    ) : (<div className="text-center">No pokemons found</div>)
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <div className="cards-container">
                {listMarkup}
            </div>
        </div>
    )
}

export default Home