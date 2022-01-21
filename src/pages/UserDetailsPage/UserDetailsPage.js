import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router";
import {Outlet, Link} from 'react-router-dom'

import {userService} from "../../services/user.service";


const UserDetailsPage = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])

    return (
        <div>
            {
                user && (
                    <div>
                        <div>Id: {user.id}</div>
                        <div>Name: {user.name} </div>
                        <div>Username: {user.username}</div>
                        <div>Username: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                        <Link to={'posts'} state={user.id}>
                            <button>See Posts</button>
                        </Link>

                        <Outlet/>
                    </div>


                )}

        </div>
    );
};

export {UserDetailsPage};