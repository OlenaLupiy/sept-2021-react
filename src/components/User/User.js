import React from 'react';
import {Link} from 'react-router-dom'

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} =user
    return (
        <div>
            <div className={css.wrap}>
                <div>{id}) {name}</div>
                <div><Link to={id.toString()} state={user}>
                    <button>See Details</button>
                </Link></div>
            </div>

        </div>
    );
};

export {User};