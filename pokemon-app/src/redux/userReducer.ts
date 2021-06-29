import {ADD_USER, DELETE_USER} from './types'
import {IUser} from "../interfaces";

interface IUserState{
    user:IUser | null
}

const initialState:IUserState = {
    user: null,
}

export const userReducer = (state = initialState, action: { type: string; payload: IUser; }) => {
    switch (action.type) {
        case ADD_USER:
            return {user: action.payload}
        case DELETE_USER:
            return {user: null}
        default: return state
    }
}
