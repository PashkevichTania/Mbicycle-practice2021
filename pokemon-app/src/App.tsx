import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PokemonPage from "./components/PokemonPage/PokemonePage";
import CONST_VARS from "./const";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={CONST_VARS.HOME_PATH} component={Home}/>
                    <Route path={CONST_VARS.POKEMON_PATH} component={PokemonPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
