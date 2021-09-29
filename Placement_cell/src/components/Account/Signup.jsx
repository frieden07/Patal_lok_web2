import React, { Fragment } from 'react'
import "./Signup.css"
import avatar from "../images_source/login.gif"
const Signup = () => {
    return (
        <Fragment>

            <form>
                <div class="signupcontainer">
                    <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                    <div class="imgcontainer">
                        <img src={avatar} alt="Avatar" class="avatar" />
                    </div>
                    <label for="email"><b>Email</b></label>
                    <br /><br />
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <br /><br />
                    <label for="password"><b>Password</b></label>
                    <br /><br />
                    <input type="password" placeholder="Enter Password" name="password" required />
                    <br /><br />
                    <label for="password-repeat"><b>Repeat Password</b></label>
                    <br /><br />
                    <input type="password" placeholder="Repeat Password" name="password-repeat" required />
                    <br />

                    <p style={{ fontSize: "15px", textAlign: "left" }} > By creating an account you agree to our<a href="#"
                        style={{ color: "dodgerblue", color: "white" }} >Terms & Privacy</a>
                    </p>
                    <br />
                    <div class="clearfix">
                        <button type="submit" class="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form >
        </Fragment >
    )
}

export default Signup
