import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {postService} from "../../services/post.service";
import {Post} from "../../components/Post/Post";
import css from './PostPage.module.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h2>Posts:</h2>
            <div className={css.postsWrap}>
                <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
                <div><Outlet/></div>
            </div>

        </div>
    );
};

export {PostsPage};