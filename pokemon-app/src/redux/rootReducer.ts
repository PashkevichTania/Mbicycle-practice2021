import {combineReducers} from 'redux'
import {pokemonReducer} from './pokemonReducer'
import {appReducer} from './appReducer'
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    app: appReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
