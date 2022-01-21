import React from 'react';
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div>{title}</div>
            <div><Link to={id.toString()} state={post}>
                <button>See Details Of Post</button>
            </Link></div>

        </div>
    );
};

export {Post};