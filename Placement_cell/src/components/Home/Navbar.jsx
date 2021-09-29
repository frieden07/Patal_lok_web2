import "./home.css"
import React from 'react'
import { Fragment } from "react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <Link className="navbar" to="/">Home</Link>
                <Link className="navbar" to="/stats">Stats</Link>
                <Link className="navbar" to="/Admin">Admin</Link>
                <Link className="navbar" to="/user">User</Link>
                <Link className="navbar_login" to="/login">Log In/Sign Up</Link>
            </nav>
        </Fragment>
    )

}

export default Navbar
