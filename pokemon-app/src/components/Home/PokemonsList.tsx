import React from "react";
import CONST_VARS from "../../const";
import {Link} from "react-router-dom";
import {IPokemon} from "../../interfaces";

const PokemonsList = (props: { pokemons: IPokemon[]; }) => {

    const pokemons_list = props.pokemons.map((pokemon) => {
        const {name} = pokemon;
        const {url} = pokemon;
        const id = ((url.match(/\/\d+\//))?.toString().match(/\d+/)?.toString())
        const pokemonImage = `${CONST_VARS.IMG_URL}${id}.png`
        return (
            <Link to={`/pokemon/${id}`}>
                <div className="pokemon-card" key={id}>
                    <div className="card-body">
                        <img src={pokemonImage} alt="pokemon image"/>
                        <p>ID: {id}</p>
                        <h5 className="card-title">Name: {name}</h5>
                    </div>
                </div>
            </Link>
        );
    })

    return (
        <div className="cards-container">
            {pokemons_list}
        </div>
    )
}

export default PokemonsList