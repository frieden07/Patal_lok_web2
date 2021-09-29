import React, { Fragment } from 'react'
import "./Admin_Dashboard.css"
import Header from "../social/Header.jsx"
import Sidebar from "../social/Sidebar.jsx"
import Feed from '../social/Feed.jsx'

const Admin_Dashboard = () => {
    return (
        <Fragment>
            <div className="format1">
                <div><Sidebar /></div>

                <div className="format2">
                    <div><Header tab_name="Dashboard" admin_name="Shivanshu" /></div>
                    {/* <div> <Main_content /></div> */}
                    <div><Feed /></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Admin_Dashboard
