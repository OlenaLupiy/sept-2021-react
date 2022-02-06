import React from 'react';

const User = ({user, getUser}) => {
    const {id, name} =user
    return (
        <div style={{display:'flex', gap:'40px'}}>
            <div>{id}) {name}</div>
            <div>
                <button onClick={()=>getUser(user)}>Details about User</button>
            </div>
        </div>
    );
};

export default User;