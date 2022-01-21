import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";
import {Outlet, Link} from 'react-router-dom'

import {postService} from "../../services/post.service";

const PostDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation()
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div>
            {post && (
                <div>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body: {post.body}</div>
                    <Link to={'comments'} state={post.id}>
                        <button>See Comments</button>
                    </Link>
                </div>
            )}
            <Outlet/>

        </div>
    );
};

export {PostDetailsPage};