import Users from "./components/users/Users";

import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'


export default function App() {

    return (
        <div >
            <div className={'wrap'}>
                <Users/>
                <Posts/></div>
            <div><Comments/></div>

        </div>
    )
}