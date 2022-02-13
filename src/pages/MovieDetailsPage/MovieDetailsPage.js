import React from 'react';
import {useEffect} from "react";
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import css from './MovieDetPage.module.css'
import {GenreMoviePage} from "../GenreMoviePage/GenreMoviePage";
import {getInfoAboutMovie} from "../../store";


const MovieDetailsPage = () => {
const {state:{id, title, overview, backdrop_path}} = useLocation();
const img = "https://image.tmdb.org/t/p/w500" + backdrop_path;


    const {movies} = useSelector(state => state['movie']);



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoAboutMovie(id))
    }, [id])


    return (
        <div className={css.movie}>
          <GenreMoviePage id={id} img={img} />
          <h1>{title}</h1>
            <h2>{overview}</h2>
            <img src={img} alt={title}/>

        </div>
    );
};

export  {MovieDetailsPage};