import React from 'react';
import {Link} from 'react-router-dom'

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} = user
    return (
        <div className={css.wrap}>
            <div>{id} {name}</div>
            <Link to={id.toString()} state={user}>
                <button>Get Details</button>
            </Link>


        </div>
    );
};

export default User;