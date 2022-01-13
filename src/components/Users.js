import {useEffect, useState} from "react";

import User from "./User";
import { userServices} from "../services/user.service";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        userServices.getAll()
            .then(value => setUsers(value))

    }, [])

    const getUserId = (id)=>{
       userServices.getById()
            .then(value => setUser(value))

    }
    return (
        <div>
            {/*<div>{user?.id}-{user?.name}-{user?.username}--{user?.email}</div>*/}
            {user && <div>{user.id} -- {user.name} -- {user.email}</div>}

            <div>{
                users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)
            }</div>
        </div>
    )
}







