import React from 'react'
import {API_PATH, WARNINGS} from "../../const";
import AbilitiesList from "./AbilitiesList/AbilitiesList";
import StatsList from "./StatsList/StatsList";
import {IPokemonDetails} from "../../interfaces";


const RenderPokemonPage = (pokemon: IPokemonDetails) => {
    const pokemonAbilities = pokemon?.abilities;
    const pokemonStats = pokemon?.stats;

    return (
        <div className="pokemon-page">{
            pokemon ? (
                <div className="PokemonCard">
                    <h4 className="center">Pokemon Page</h4>
                    <img src={`${API_PATH.IMG}${pokemon.id}.png`} alt="pokemon"/>
                    <div className="pokemon-info">
                        <div className="pokemon-general-info">
                            <div>ID: {pokemon.id}</div>
                            <div>Name: {pokemon.name}</div>
                            <div>Height: {pokemon.height}</div>
                            <div>Weight: {pokemon.weight}</div>
                            <div className="abilities">
                                <p>Abilities</p>
                                {pokemonAbilities ? (<AbilitiesList abilities={pokemonAbilities}/>) :
                                    (<div>{WARNINGS.NO_ABILITIES}</div>)}
                            </div>
                        </div>
                        <div className="stats">
                            <p>Stats</p>
                            {pokemonStats ? (<StatsList stats={pokemonStats}/>) :
                                (<div>{WARNINGS.NO_STATS}</div>)}
                        </div>
                    </div>
                </div>
            ) : ("Pokemon not found")
        }</div>
    )
}

export default RenderPokemonPage;
