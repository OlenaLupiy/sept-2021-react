import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {addGenreThunk, firstPage} from "../../store";
import css from './Genres.module.css'

const Genres = ({genres: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.genres}>
            <div className={css.genre}>{id}:
                <Link to={'/movies'} onClick={() => {
                    dispatch(addGenreThunk(id));
                    dispatch(firstPage(1))
                }}>{name}
                </Link></div>
        </div>
    );
};

export {Genres};