import React, { Fragment } from 'react'
import img7 from "../images_source/Student.gif"
import "./Header.css"

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <div className="tab-name">
                    <h1>
                        {props.tab_name}
                    </h1>
                </div>
                <div className="Admin-name">
                    <h1>{props.admin_name}</h1>
                </div>

                <div className="Admin-Avatar">
                    <img src={img7} alt="Avatar" />
                </div>
            </header>
        </Fragment >
    )
}

export default Header

