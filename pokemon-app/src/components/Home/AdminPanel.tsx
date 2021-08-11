import React from 'react';
import {useDispatch} from "react-redux";
import {deletePokemons, fetchPokemons} from "../../redux/actions";

const AdminPanel = () => {
    const dispatch = useDispatch()

    const shuffle = () =>{
        dispatch(deletePokemons())
        dispatch(fetchPokemons())
    }

    return (
        <div className="adminPanel">
            <button onClick={shuffle}>Shuffle!</button>
        </div>
    );
};

export default React.memo(AdminPanel);
