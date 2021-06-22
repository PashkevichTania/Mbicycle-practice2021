import React from 'react';
import './components/Home/home.scss';
import './components/PokemonPage/pokemonCard.scss';
import './components/NavBar/nav.scss';
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PokemonPage from "./components/PokemonPage/PokemonePage";
import Navbar from "./components/NavBar/NavBar";
import SearchPage from "./components/Search/SearchPage";
import {APP_PATH} from "./const";

function App() {
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
