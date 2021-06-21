import React from 'react'
import CONST_VARS from "../../const";
import AbilitiesList from "./AbilitiesList";
import StatsList from "./StatsList";
import {IPokemonDetails} from "../../interfaces";


const RenderPokemonPage = (pokemon: IPokemonDetails) => {
    const pokemonAbilities = pokemon?.abilities;
    const pokemonStats = pokemon?.stats;

    const pokemonAbilitiesList = pokemonAbilities ?
        (<AbilitiesList abilities={pokemonAbilities}/>) :
        (<div>{CONST_VARS.NO_ABILITIES_TEXT}</div>);
    const pokemonStatsList = pokemonStats ?
        (<StatsList stats={pokemonStats}/>) :
        (<div>{CONST_VARS.NO_STATS_TEXT}</div>);

    const pokemonImage = `${CONST_VARS.IMG_URL}${pokemon.id}.png`

    const result = pokemon ? (
        <div className="PokemonCard">
            <h4 className="center">Pokemon Page</h4>
            <img src={pokemonImage} alt="pokemon image"/>
            <div className="pokemon-info">
                <div className="pokemon-general-info">
                    <div>ID: {pokemon.id}</div>
                    <div>Name: {pokemon.name}</div>
                    <div>Height: {pokemon.height}</div>
                    <div>Weight: {pokemon.weight}</div>
                    <div className="abilities">
                        <p>Abilities</p>
                        {pokemonAbilitiesList}
                    </div>
                </div>
                <div className="stats">
                    <p>Stats</p>
                    {pokemonStatsList}
                </div>
            </div>
        </div>
    ) : ("Pokemon not found")

    return (
        <div className="pokemon-page">{result}</div>
    )
}

export default RenderPokemonPage;