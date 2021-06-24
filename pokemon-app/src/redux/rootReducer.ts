import {combineReducers} from 'redux'
import {pokemonReducer} from './pokemonReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>
