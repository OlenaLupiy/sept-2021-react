import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../../services/post.service";

const PostCommentsPage = () => {
    const {state} = useLocation()
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentsById(state).then(value => setComments([...value]))
    }, [])

    return (
        <div>
            <h3>Comments:</h3>
            {
                comments.map(comment => <div key={comment.id}>{comment.id} {comment.name} {comment.body}</div>)
            }

        </div>
    );
};

export {PostCommentsPage};