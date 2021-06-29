import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser, fetchPokemons} from "./redux/actions";

import './components/Home/home.scss';
import './components/PokemonPage/pokemonCard.scss';
import './components/Header/header.scss';
import './components/Search/search.scss';

import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PokemonPage from "./components/PokemonPage/PokemonPage";
import Header from "./components/Header/Header";
import SearchPage from "./components/Search/SearchPage";
import {APP_PATH} from "./const";
import LoginForm from "./components/Header/LoginForm";
import Logout from "./components/Header/Logout";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    function getUser() {
        const retrievedUser = localStorage.getItem('currentUser');
        if (retrievedUser) {
            dispatch(addUser(JSON.parse(retrievedUser)))
        }
    }
    useEffect(()=>{
        getUser()
    },[])

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path={APP_PATH.HOME} component={Home}/>
                    <Route path={APP_PATH.POKEMON} component={PokemonPage}/>
                    <Route path={APP_PATH.SEARCH} component={SearchPage}/>
                    <Route component={PageNotFound} />
                </Switch>
                <Logout />
                <LoginForm />
            </div>
        </Router>
    );
}

export default App;
