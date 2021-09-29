import React, { Fragment } from 'react'
import Create_post from './Create_post'
import Sidebar from '../social/Sidebar'
import Header from "../social/Header"

const Admin_create = () => {
    return (
        <Fragment>
            <div className="format1">
                <div>
                    <Sidebar c1="active" c2="inactive" c3="inactive" />
                </div>
                <div className="format2">
                    <div><Header tab_name="Create Post" admin_name="Shivanshu" /></div>

                    <div> <Create_post /></div>
                </div>
            </div>

        </Fragment>
    )
}

export default Admin_create
