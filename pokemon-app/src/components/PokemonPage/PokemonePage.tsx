import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import CONST_VARS from "../../const";
import AbilitiesList from "./AbilitiesList";
import {IPokemonDetails} from "../../interfaces";


const PokemonPage = (props: { match: { params: { pokemon_id: string; }; }; } ) => {
    const id = props.match.params.pokemon_id;
    const [pokemon, setPokemon] = useState<IPokemonDetails>()
    useEffect(() => {
        (async () => {
            const res = await axios.get(`${CONST_VARS.BASE_URL}pokemon/${id}/`);
            setPokemon(res.data)
        })();

    }, []);
    const pokemonAbilities = pokemon?.abilities;
    console.log("pokemonAbilities")
    console.log(pokemonAbilities)

    const pokemonAbilitiesList =  pokemonAbilities ?
        (<AbilitiesList abilities={pokemonAbilities}/>):
        (<div>No abilities</div>);

    const pokemonImage = `${CONST_VARS.IMG_URL}${id}.png`

    const res = pokemon ? (
        <div className="container">
            <h4 className="center">Pokemon Page</h4>
            <img src={pokemonImage} alt="pokemon image"/>
            <div>ID: {pokemon.id}</div>
            <div>Name: {pokemon.name}</div>
            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
            <div className="abilities">
                <p>Abilities</p>
                {pokemonAbilitiesList}
            </div>
        </div>
    ): ("Pokemon not found")

    return (
        <div className="PokemonCard">{res}</div>
    )
}

export default PokemonPage;