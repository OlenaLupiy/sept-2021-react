import React from 'react';
import {useLocation} from "react-router";

import css from './MovieDetPage.module.css'


const MovieDetailsPage = () => {
    const {state: {title, overview, backdrop_path}} = useLocation();
    const img = "https://image.tmdb.org/t/p/w500" + backdrop_path;

    return (
        <div className={css.movie}>

            <h1>{title}</h1>
            <h2>{overview}</h2>
            <img src={img} alt={title}/>

        </div>
    );
};

export {MovieDetailsPage};