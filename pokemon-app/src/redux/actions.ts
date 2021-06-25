import {ADD_POKEMON, GetPokemonsActionType, HIDE_LOADER, SHOW_LOADER} from "./types";
import axios from "axios";
import {API_PATH} from "../const";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}


export function fetchPokemon() {
    let params = {
        limit: 10,
        offset: 1000,
    }
    params.offset = Math.floor(Math.random() * 1000)

    return async (dispatch: (action: GetPokemonsActionType | { type: string; }) => void) => {
        dispatch(showLoader())
        const response = await axios.get(`${API_PATH.BASE}pokemon?limit=${params.limit}&offset=${params.offset}`);
        response.data.results.forEach((pokemon: { url: string; }) => {
            (async () => {
                const {url} = pokemon;
                const res = await axios.get(url);
                dispatch({ type: ADD_POKEMON, payload: res.data})
            })();
        })
        dispatch(hideLoader())
    }
}
