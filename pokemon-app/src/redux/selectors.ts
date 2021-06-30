import {RootState} from "./rootReducer";
import {createSelector} from "reselect";

export const loadingSelector = (state: RootState) => state.app.loading;
export const userSelector = (state: RootState) => state.user.user;
export const pokemonDetailsSelector = (state: RootState) => state.pokemon.pokemonsDetails;
export const pokemonIDSelector = (id:number) => createSelector(
    (state: RootState) => state.pokemon.pokemonsDetails,
    (pokemons) => pokemons.find((elem) => elem.id == id)
)