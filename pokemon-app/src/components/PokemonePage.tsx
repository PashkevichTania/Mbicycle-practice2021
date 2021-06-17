import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const base = 'https://pokeapi.co/api/v2/'

const PokemonPage = (props: any ) => {
    const id = props.match.params.pokemon_id
    const [pokemon, setPokemon] = useState<any>([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${base}pokemon/${id}/`);
            console.log(res.data)
            setPokemon(res.data)
        })();

    }, []);
    const pokemonAbilitisList =  pokemon.abilities ? (
        pokemon.abilities.map((a: { ability: any; }) => {
            const {name} = a.ability;
            return (
                <div key={name}>
                    Ability: {name};
                </div>
            );
        })
    ): (<div></div>);
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return (
        <div>
            <div className="container">
                <h4 className="center">Pokemon Page</h4>
                <div>ID: {pokemon.id}</div>
                <div>Name: {pokemon.name}</div>
                <div>Height: {pokemon.height}</div>
                <div>Weight: {pokemon.weight}</div>
                <p>Abilities</p>
                {pokemonAbilitisList}
                <img src={pokemonImage} alt="pokemon image"/>
            </div>
        </div>
    )
}

export default PokemonPage