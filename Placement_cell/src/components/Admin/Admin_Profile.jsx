import React, { Fragment } from 'react'
import Header from "../social/Header.jsx"
import Sidebar from "../social/Sidebar.jsx"
import Tile from "../Home/Tile.jsx"
import "./Admin_Profile.css"

const Admin_Profile = () => {
    return (
        <Fragment>
            <div className="format1">
                <div><Sidebar /></div>

                <div className="format2">
                    <div><Header tab_name="Profile" admin_name="Shivanshu" /></div>

                    <div class="profilecards">
                        <Tile heading="Shivanshu" para="Name" />
                        <Tile heading="SE COMP B" para="Branch" />
                        <Tile heading="7247" para="Roll No." />
                        <Tile heading="DE Shaw" para="Intern at" />
                        <Tile heading="Nil" para="Placements" />
                        <Tile heading="1st in ABC Hackathon" para="Achievements" />
                        <Tile heading="9.8" para="1ST YR GPA" />
                        <Tile heading="Inter at Adobe, Intern at Flipkar " para="Work experience with any other company" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Admin_Profile
