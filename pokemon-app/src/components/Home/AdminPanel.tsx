import React from 'react';
import {useDispatch} from "react-redux";
import {deletePokemons, fetchPokemon} from "../../redux/actions";

const AdminPanel = () => {
    const dispatch = useDispatch()

    const shuffle = () =>{
        dispatch(deletePokemons())
        dispatch(fetchPokemon())
    }

    return (
        <div className="adminPanel">
            <button onClick={shuffle}>shuffle</button>
        </div>
    );
};

export default AdminPanel;