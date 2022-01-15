import {useEffect, useState} from "react";
import {getAll} from "../../services/user.service";
import User from "../user/User";

export default function Users({getUser}){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getAll().then(value => setUsers(value))
    }, [])
    
    return (
        <div>
            {users.map(user=> <User key={user.id} user={user} getUser={getUser}/>)}
            
        </div>
    )
}