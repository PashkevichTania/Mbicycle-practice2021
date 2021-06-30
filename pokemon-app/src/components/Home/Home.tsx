import React from 'react'
import {useSelector} from "react-redux";
import PokemonsList from "./PokemonsList";
import Loader from './Loader'
import {loadingSelector} from "../../redux/selectors";


const Home = () => {

    let loading = useSelector(loadingSelector);

    return loading ? (<Loader/>) :
        (
            <div className="home">
                <PokemonsList />
            </div>
        )
}

export default Home;
