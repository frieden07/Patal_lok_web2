import React from "react"
import "./home.css"
import { Fragment } from "react"

const Tile = (props) => {
    return (
        <Fragment>

            <div class="cards-single">
                <div>
                    <h1>{props.heading}</h1>
                    <span>{props.para}</span>
                </div>
                <div>
                    <span class="las la-users"></span>
                </div>
            </div>

        </Fragment >
    )
}

export default Tile
