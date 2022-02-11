import React from 'react';
import {Link, Outlet} from "react-router-dom";
import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {id, title, overview, poster_path} = movie;
    return (
        <div className={css.movie}>

            <div className={css.wrap}>
                <div className={css.img}><img
                    src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + poster_path} alt="{title}"/>
                </div>
                <div><Link to={id.toString()} state={movie}>
                    {title}
                </Link></div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export {Movie};