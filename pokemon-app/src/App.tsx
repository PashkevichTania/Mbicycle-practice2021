import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPokemon} from "./redux/actions";

import './components/Home/home.scss';
import './components/PokemonPage/pokemonCard.scss';
import './components/NavBar/nav.scss';
import './components/Search/search.scss';

import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PokemonPage from "./components/PokemonPage/PokemonePage";
import Navbar from "./components/NavBar/NavBar";
import SearchPage from "./components/Search/SearchPage";
import {APP_PATH} from "./const";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path={APP_PATH.HOME} component={Home}/>
                    <Route path={APP_PATH.POKEMON} component={PokemonPage}/>
                    <Route path={APP_PATH.SEARCH} component={SearchPage}/>
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
