import React, { Fragment } from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = (props) => {
    return (
        <Fragment>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2>Admin</h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            {<Link to="/admin_dashboard" /*className="{props.c1}"*/>Dashboard</Link>}
                        </li>
                        <li>
                            <Link to="/admin_profile" /*className="{props.c3}"*/>My profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment >
    )
}

export default Sidebar
