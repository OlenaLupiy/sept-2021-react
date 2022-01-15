import Post from "../post/Post";

import {useEffect, useState} from "react";
import {getByUserId} from "../../services/post.service";

export default function Posts({userId}){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getByUserId(userId).then(value => setPosts(value))

    }, [userId])


    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    )
}