import React from 'react';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import PageNotFound from "./components/PageNotFound";
import PokemonPage from "./components/PokemonePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/pokemon/:pokemon_id" component={PokemonPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
