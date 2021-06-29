import {ADD_POKEMONS, DELETE_POKEMONS, GetPokemonsActionType} from './types'
import {IPokemonDetails} from "../interfaces";

interface IInint{
    pokemonsDetails: IPokemonDetails[],
}

const initialState:IInint = {
    pokemonsDetails: [],
}


export const pokemonReducer = (state = initialState,
                               action: GetPokemonsActionType) => {
    switch (action.type) {
        case ADD_POKEMONS:
            return { pokemonsDetails: state.pokemonsDetails.concat(action.payload)};
        case DELETE_POKEMONS:
            return {pokemonsDetails: []}
        default: return state;
    }
}
