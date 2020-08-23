import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const TopBar = () => {
    return(
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Medium
                </Link>
                <ul className="nav navbar-nav pul-xs-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            Sign in
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">
                            Sign up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar