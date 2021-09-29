import React, { Fragment } from 'react'
import "./Post.css"
import avatar from "../images_source/Student.gif"
import ait_img from "../images_source/AIT-IMG-1.png"

const Post = () => {
    return (
        <Fragment>
            <div className="Post">

                <div className="post-details-1">
                    <div>
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div>
                        <h3>Username</h3>
                    </div>
                </div>

                <div className="post-details-2">
                    <img src={ait_img} alt="post-image" />
                </div>

                <div className="post-details-3">
                    <p>post-details: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ullam explicabo autem vel iste non tempora omnis molestias sequi tempore?</p>
                </div>

            </div>

        </Fragment>
    )
}

export default Post
