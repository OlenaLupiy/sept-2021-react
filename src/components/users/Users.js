import {useEffect, useState} from "react";
import './Users.css'

import User from "../user/User";
import UserInfo from "../UserInfo";
import Posts from "../Posts";
import {getPostsOfUsers, getUsers} from "../../services/user.service";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])


    const getUserInfo = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setUser(value))

    }

    const getPosts = (id) => {
        getPostsOfUsers()
            .then(value => setPosts(value))
    }

    return (
        <div>
            <div className={'wrap'}>
                <div className={'users-box'}>
                    {users.map(value => <User key={value.id} user={value} getUserInfo={getUserInfo}/>)}
                </div>

                <div className={'chosen-one'}>
                    {user && <UserInfo key={user.id} user={user}/>}
                </div>
            </div>
            <div>
                {posts.map(value => <Posts key={value.id} post={value} getPosts={getPosts}/>)}
            </div>

        </div>
    )
}