import React, {useEffect, useState} from 'react'
import {WARNINGS} from "../../const";
import {IPokemonDetails} from "../../interfaces";
import RenderPokemonPage from "./RenderPokemonPage";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";

interface Iprops{
    match: { params: { pokemon_id: number; }; };
}

const PokemonPage = (props: Iprops) => {
    const id = props.match.params.pokemon_id
    console.log(props)
    const [pokemon, setPokemon] = useState<IPokemonDetails>()

    export const getPokemonByIDSelector = (id: number):
        OutputSelector<Pokemon, Pokemon, (res: Pokemon) => Pokemon> => createSelector(
        selectAllPokemonsSaga,
        pokemons => pokemons.find((pokemon: Pokemon) => {
            if (isNaN(id)) return pokemon.id === 0;
            return pokemon.id === id;
        })
    );

    let pokemonsDetails: IPokemonDetails = useSelector((state: RootState) => {
        return  state.pokemon.pokemonsDetails[1];
    });
    useEffect(() => {
        console.log(pokemonsDetails)
    }, [pokemonsDetails]);

    return (
        <div className="pokemon-page">
            {pokemon ? (<RenderPokemonPage {...pokemon}/>) : (WARNINGS.NO_POKEMON)}
        </div>
    )
}

export default PokemonPage;
