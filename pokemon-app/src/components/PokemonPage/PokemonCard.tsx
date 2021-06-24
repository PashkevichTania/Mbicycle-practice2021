import React from "react";
import {API_PATH} from "../../const";
import {Link} from "react-router-dom";
import {IPokemonDetails} from "../../interfaces";

const PokemonCard = ({pokemonDetails}: { pokemonDetails: IPokemonDetails; }) => {
    interface Params extends IPokemonDetails {
        pathname: string
    }

    const params: Params = {
        pathname: `/pokemon/${pokemonDetails.id}`,
        name: pokemonDetails.name,
        id: pokemonDetails.id,
        abilities: pokemonDetails.abilities,
        height: pokemonDetails.height,
        stats: pokemonDetails.stats,
        weight: pokemonDetails.weight,
    }

    const pokemonImage = `${API_PATH.IMG}${params.id}.png`

    return (
        <Link to={params}>
            <div className="pokemon-card">
                <div className="card-body">
                    <img src={pokemonImage} alt="pokemon"/>
                    <p>ID: {params.id}</p>
                    <h5 className="card-title">Name: {params.name}</h5>
                </div>
            </div>
        </Link>
    );
}

export default PokemonCard;
