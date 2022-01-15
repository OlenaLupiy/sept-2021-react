import Users from "./components/users/Users";
import UserDetails from "./components/userdetails/UserDetails";
import Posts from "./components/posts/Posts";
import css from "./App.module.css"

import {useState} from "react";
import User from "./components/user/User";



export default function App(){
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user)=>{
        setUser(user)
       setUserId(null)
    }

    const getUserId = (id)=>{
        setUserId(id)

    }
    
    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                { user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
            
        </div>
    )
}