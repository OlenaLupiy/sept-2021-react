import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";

import {userService} from "../../services/user.service";


const UserPostsPage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        userService.getPostsById(state).then(value => setUserPosts([...value]))
    }, []);

    return (
        <div>
            <div>Posts:</div>
            {
                userPosts.map(userpost => <div key={userpost.id}>{userpost.id} {userpost.title}</div>)
            }

        </div>
    );
};

export {UserPostsPage};