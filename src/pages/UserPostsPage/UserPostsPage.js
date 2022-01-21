import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../services/user.service";

const UserPostsPage = () => {
    const {state} = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getPostsById(state).then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h3>Posts:</h3>
            {
                posts.map(post => <div key={post.id}>{post.id} {post.title}</div>)
            }

        </div>
    );
};

export {UserPostsPage};