import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.service";
import User from "../user/User";
import Post from "./Post";

export default function Posts(){

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            {
                posts.map(post=><Post  key={post.id} id={post.id} title={post.title} body={post.body}/>)
            }

        </div>
    )
}