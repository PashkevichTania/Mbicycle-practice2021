import {IPokemonDetails} from "../interfaces";

export const SHOW_LOADER = 'APP/SHOW_LOADER'
export const HIDE_LOADER = 'APP/HIDE_LOADER'

export const ADD_POKEMON = 'POKEMONS/ADD_POKEMON'

export type GetPokemonsActionType = {
    type: string;
    payload: IPokemonDetails[];
}
