import React, { Fragment } from 'react'
import "./User_Dashboard.css"
import Header from "../social/Header.jsx"
import Sidebar from "./Sidebar.jsx"
import Feed from '../social/Feed.jsx'

const User_Dashboard = () => {
    return (
        <Fragment>
            <div className="format1">
                <div><Sidebar /></div>

                <div className="format2">
                    <div><Header tab_name="Dashboard" user_name="Shivanshu" /></div>
                    <div><Feed /></div>
                </div>
            </div>
        </Fragment>
    )
}

export default User_Dashboard
