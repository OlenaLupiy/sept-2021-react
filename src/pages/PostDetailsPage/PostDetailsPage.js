import React, {useEffect, useState} from 'react';
import {Outlet, Link, useParams, useLocation} from 'react-router-dom'

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
        postService.getPostById(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div>
            {post && (
                <div>
                    <h3>Post details:</h3>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <Link to={'comments'} state={post.id}>
                        <button>See Comments</button>
                    </Link>
                    <Outlet/>
                </div>
            )}


        </div>
    );
};

export {PostDetailsPage};