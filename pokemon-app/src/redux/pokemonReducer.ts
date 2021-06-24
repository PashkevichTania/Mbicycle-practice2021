import {FETCH_POKEMONS, FETCH_POKEMONS_DETAILS} from './types'
import {IPokemon, IPokemonDetails} from "../interfaces";

interface IInint{
    pokemons: IPokemon[],
    pokemonsDetails: IPokemonDetails[],
}

const initialState:IInint = {
    pokemons: [],
    pokemonsDetails: [],
}


export const pokemonReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return { ...state, pokemons: action.payload }
        case FETCH_POKEMONS_DETAILS:
            return { ...state, pokemonsDetails: [...state.pokemonsDetails, action.payload]}
        default: return state
    }
}
