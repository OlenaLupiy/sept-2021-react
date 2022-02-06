import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

import css from './App.module.css'
import UserDetail from "./components/UserDetail/UserDetail";
import {useState} from "react";


export default function App(){
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
      setUser(user)
        setUserId(null)
    }
    const getUserId = (id) => {
      setUserId(id)
    }

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                { user && <UserDetail user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
            
        </div>
    )
}