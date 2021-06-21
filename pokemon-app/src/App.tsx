import React from 'react';
import './components/Home/home.scss';
import './components/PokemonPage/pokemonCard.scss';
import './components/NavBar/nav.scss';
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PokemonPage from "./components/PokemonPage/PokemonePage";
import CONST_VARS from "./const";
import Navbar from "./components/NavBar/NavBar";
import SearchPage from "./components/Search/SearchPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path={CONST_VARS.HOME_PATH} component={Home}/>
                    <Route path={CONST_VARS.POKEMON_PATH} component={PokemonPage}/>
                    <Route path={CONST_VARS.SEARCH_PATH} component={SearchPage}/>
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
