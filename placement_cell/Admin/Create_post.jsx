import React, { Fragment } from 'react'
import "./Create_Post.css"

const Create_post = () => {
    return (
        <Fragment>
            <div class="create">
                <form>
                    <div class="create-form">
                        <br /><br />
                        <label for="message"><b>Message</b></label><br />
                        <input className="postdetails" type="text" placeholder="Type here" name="mess" /><br /><br />

                        <label for="Doc"><b>Attachments</b></label><br />
                        <input type="file" name="doc" /><br /><br />

                        <label for="types"><b>Department</b></label><br />
                        <input type="radio" name="type1" required /> COMP &nbsp;&nbsp;<input type="radio" name="type2"
                            required /> IT &nbsp;&nbsp;<input type="radio" name="type3" required /> ENTC &nbsp; &nbsp; <input
                            type="radio" name="type4" required /> MECH<br /><br />


                        <label for="type"><b>Type</b></label><br />
                        <input type="radio" name="type5" required /> Placement &nbsp; &nbsp; <input type="radio" name="type6"
                            required /> Internship<br /><br />


                        <button type="reset" class="btn">Reset</button>&nbsp; &nbsp;
                        <button type="submit" class="btn">Post</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Create_post
