import React from 'react';

const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>{id} {userId} {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;