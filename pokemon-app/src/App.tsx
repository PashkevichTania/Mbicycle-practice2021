import React from 'react';
import './App.css';
import Home from "./components/Home";
//import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="App">
        {/*<Switch>*/}
        {/*    <Route exact path="/" component={Home} />*/}
        {/*    <Route path="/posts/:post_id" component={PokemonPage} />*/}
        {/*    <Route component={PageNotFound}/>*/}
        {/*</Switch>*/}
        <Home></Home>
    </div>
  );
}

export default App;
