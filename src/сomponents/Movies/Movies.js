import React from 'react';
import {Outlet, Link} from "react-router-dom";
import css from './Movies.module.css'


const Movies = ({movies, movies:{id, title, overview, release_date, poster_path}}) => {
const img = 'https://image.tmdb.org/t/p/w300/' + poster_path;
    return (
        <div className={css.movies}>
            <Link to={id.toString()} state={movies}>
                <img src={img} alt={title}/>
            </Link>
            <h1>{title}</h1>
            <p>{overview}</p>
            <small>{release_date}</small>

            <Outlet/>
        </div>
    );
};

export {Movies};