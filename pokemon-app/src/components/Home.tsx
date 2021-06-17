import React, {useEffect, useState} from 'react'
import axios from 'axios'


const base = 'https://pokeapi.co/api/v2/'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${base}pokemon?limit=10&offset=200`);
            setPokemons(res.data.results)
        })();

    }, []);


    const listMarkup = pokemons.length > 0 ? (
        pokemons.map(pokemon => {
            const {name} = pokemon;
            const {id} = pokemon;
            return (
                <div className="pokemon-card" key={id}>
                    <div className="card-body">
                        <p className="card-text">Name: {name}</p>
                    </div>
                </div>
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