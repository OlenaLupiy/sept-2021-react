import React from 'react';
import {NavLink} from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genre'}>Genre</NavLink>

        </div>
    );
};

export {Header};