import React from 'react'
import {NavLink, withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import Login from "./Login";
import AdminPanel from "../Home/AdminPanel";
import {userSelector} from "../../redux/selectors";
import ThemeToggle from "./ThemeToggle";

const Header = () => {

    const currentUser = useSelector(userSelector)

    return (
        <header id="header">
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
                        <li>
                            <NavLink className="nav-item nav-link" exact to="/test/">Test</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            {currentUser?.firstName === 'admin' ? <AdminPanel /> : null}
            <Login />
            <ThemeToggle />
        </header>
)
}

export default withRouter(Header)
