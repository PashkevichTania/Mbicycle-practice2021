import React from 'react'
import {NavLink, withRouter} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
            <div className="navbar-brand">Navigate </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav nav-tabs mr-auto">
                    <li>
                        <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item nav-link" exact to="/search/">Search</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
)
}

export default withRouter(Navbar)
