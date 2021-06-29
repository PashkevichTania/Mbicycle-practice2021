import React from 'react'
import {WARNINGS} from "../../const";
import RenderPokemonPage from "./RenderPokemonPage";
import {createSelector} from "reselect";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";

interface Iprops{
    match: { params: { pokemon_id: number; }; };
}

const PokemonPage = (props: Iprops) => {
    const id = props.match.params.pokemon_id
    console.log('id='+id)
    console.log(props)
    //const [pokemon, setPokemon] = useState<IPokemonDetails>()

    const selectNumCompletedTodos = createSelector(
        (state: RootState) => state.pokemon.pokemonsDetails,
        (pokemons) => pokemons.filter((elem) => elem.id == id)
    )

    const selectedPokemon = useSelector(selectNumCompletedTodos)
    console.log('selectedPokemon')
    console.log(selectedPokemon)

    return (
        <div className="pokemon-page">
            {selectedPokemon[0] ? (<RenderPokemonPage {...selectedPokemon[0]}/>) : (WARNINGS.NO_POKEMON)}
        </div>
    )
}

export default PokemonPage;
