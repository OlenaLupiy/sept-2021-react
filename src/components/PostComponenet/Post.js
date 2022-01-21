import React from 'react';
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <Link to={id.toString()} state={post}>Title: {title}
                <button>See details</button>
            </Link>

        </div>
    );
};

export default Post;
