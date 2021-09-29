import React, { Fragment } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import avatar from "../images_source/login.gif"
const Login = () => {
    return (
        <Fragment>
            <form>

                <div class="logincontainer">
                    <h2 style={{ textAlign: "center" }}>Log In</h2>
                    <div class="imgcontainer">
                        <img src={avatar} alt="Avatar" class="avatar" />
                    </div>
                    <br />
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required />
                    <br /><br />
                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <br /><br />
                    <button style={{ width: "90px", borderRadius: "25px" }} type="submit">Log In</button>

                    <Link to="/signup" style={{ color: "white", textDecoration: "none", float: 'right', marginTop: "20px" }}>Create New Account</Link>
                </div>

            </form>
        </Fragment>
    )
}

export default Login
