import {ADD_POKEMON, DELETE_POKEMON, GetPokemonsActionType} from './types'
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
        case ADD_POKEMON:
            return { pokemonsDetails: state.pokemonsDetails.concat(action.payload)};
        case DELETE_POKEMON:
            return {pokemonsDetails: []}
        default: return state;
    }
}
