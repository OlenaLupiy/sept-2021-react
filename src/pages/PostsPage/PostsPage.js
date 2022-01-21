import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {postService} from "../../services/post.service";
import Post from "../../components/PostComponenet/Post";
import css from './PostsPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <div className={css.postsWrap}>
                <div>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <div><Outlet/></div>
            </div>

        </div>
    );
};

export {PostsPage};