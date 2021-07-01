import React from "react";
import {API_PATH} from "../../const";
import {Link} from "react-router-dom";
import {IPokemonDetails} from "../../interfaces";

const PokemonCard = ({pokemonDetails}: { pokemonDetails: IPokemonDetails; }) => {
    console.log('render card')
    const params = {
        pathname: `/pokemon/${pokemonDetails.id}`,
    }

    const pokemonImage = `${API_PATH.IMG}${pokemonDetails.id}.png`

    return (
        <Link to={params}>
            <div className="pokemon-card">
                <img src={pokemonImage} alt="pokemon"/>
                <p>ID: {pokemonDetails.id}</p>
                <h5 className="card-title">Name: {pokemonDetails.name}</h5>
            </div>
        </Link>
    );
}

export default React.memo(PokemonCard);
