import React from 'react'
import {NavLink, withRouter} from "react-router-dom";
import Login from "./Login";
import AdminPanel from "../Home/AdminPanel";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/rootReducer";

const Header = () => {

    const currentUser = useSelector((state: RootState) =>state.user.user)

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
                    </ul>
                </div>
            </nav>
            {currentUser?.firstName === 'admin' ? <AdminPanel /> : null}
            <Login />
        </header>
)
}

export default withRouter(Header)
