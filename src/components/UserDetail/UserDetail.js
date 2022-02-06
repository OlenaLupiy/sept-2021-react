import React from 'react';

const UserDetail = ({user:{id, name, username, phone, address:{city, street}}, getUserId}) => {

    return (
        <div>
            <div>{id}. {name} {username}</div>
            <div>{phone}</div>
            <div>{city}</div>
            <div>{street}</div>
            <button onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetail;