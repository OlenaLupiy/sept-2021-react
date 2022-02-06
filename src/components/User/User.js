import React from 'react';

const User = ({user:{name, username, email}}) => {
    return (
        <div>
            <div>{name} --{username} --{email}</div>
        </div>
    );
};

export default User;