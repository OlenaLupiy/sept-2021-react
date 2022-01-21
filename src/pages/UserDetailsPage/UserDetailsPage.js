import React, {useEffect, useState} from 'react';
import {Outlet, Link, useParams} from 'react-router-dom'

import {userService} from "../../services/user.service";

const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);


    useEffect(() => {
        userService.getUserById(id).then(value => setUser({...value}))
    }, [])

    return (
        <div>
            {user && (
                <div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.address.city}</div>
                    <div>{user.phone}</div>
                    <Link to={'posts'} state={user.id}>
                        <button>See Posts</button>
                    </Link>
                    <Link to={'albums'} state={user.id}>
                        <button>See Albums</button>
                    </Link>
                </div>
            )}

            <Outlet/>

        </div>
    );
};

export {UserDetailsPage};