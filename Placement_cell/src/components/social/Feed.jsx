import React, { Fragment } from 'react'
import Post from './Post'
import "./Feed.css"

const Feed = () => {
    return (
        <Fragment>
            <div className="Feed-css">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </Fragment>
    )
}

export default Feed
