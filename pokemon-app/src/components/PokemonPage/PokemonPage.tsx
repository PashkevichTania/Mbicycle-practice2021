import React from 'react'
import {WARNINGS} from "../../const";
import RenderPokemonPage from "./RenderPokemonPage";
import {useSelector} from "react-redux";
import {pokemonIDSelector} from "../../redux/selectors";

interface Iprops{
    match: { params: { pokemon_id: number; }; };
}

const PokemonPage = (props: Iprops) => {
    const id = props.match.params.pokemon_id
    // console.log('id='+id)
    // console.log(props)

    const selectedPokemon = useSelector(pokemonIDSelector(id))

    return (
        <div className="pokemon-page">
            {selectedPokemon ? (<RenderPokemonPage {...selectedPokemon}/>) : (WARNINGS.NO_POKEMON)}
        </div>
    )
}

export default React.memo(PokemonPage);
