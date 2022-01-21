import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";

import {postService} from "../../services/post.service";

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {state} = useLocation()

    useEffect(() => {
        postService.getCommentById(state).then(value => setComments([...value]))
    }, [])
    return (
        <div>
            <h2>Comments:</h2>
            {
                comments.map(comment => <div key={comment.id}>{comment.id} {comment.name} {comment.body}</div>)
            }

        </div>
    );
};

export {PostCommentsPage};