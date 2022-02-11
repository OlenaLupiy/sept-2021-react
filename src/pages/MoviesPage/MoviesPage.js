import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store";
import {Movie} from "../../сomponents";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const dispatch = useDispatch();
    const {movies, status, error} = useSelector(state => state['movie']);
    useEffect(()=>{
        dispatch(getAllMovies())
    }, [dispatch])
const {results} = movies;

    return (
        <div className={css.movies}>
            {error && <h2>{error}</h2>}
            {results && results.map(movie=> <Movie key={movie.id} movie={movie}/>)}
            <Outlet/>
        </div>
    );
};

export {MoviesPage};