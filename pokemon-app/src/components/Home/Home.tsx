import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import PokemonsList from "./PokemonsList";
import Loader from './Loader'



const Home = () => {

    let loading = useSelector((state: RootState) => {
        return state.app.loading;
    });

    if (loading) {
        return <Loader />
    }

    return (
        <div className="home">
            <PokemonsList />
        </div>
    )
}

export default Home;
