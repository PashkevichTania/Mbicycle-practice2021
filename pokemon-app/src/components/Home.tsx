import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const base = 'https://pokeapi.co/api/v2/'


const Home = () => {
    interface ISubmitResult {
        name: string;
        url: string;
    }

    const [pokemons, setPokemons] = useState<ISubmitResult[]>([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${base}pokemon?limit=10&offset=200`);
            setPokemons(res.data.results)
            console.log(res.data.results)
        })();
    }, []);


    const listMarkup = pokemons.length > 0 ? (
        pokemons.map(pokemon => {
            const {name} = pokemon;
            const {url} = pokemon;
            const id = url.slice(-4, -1);
            const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
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