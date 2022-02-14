import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store";
import {Movies} from "../../сomponents";
import css from './MoviesPage.module.css'
import {PagesComponent} from "../../сomponents";

const MoviesPage = () => {
    const dispatch = useDispatch();

    const {movies, page, error} = useSelector(state => state['movie']);

    const {genre} = useSelector(state => state['genre'])

    useEffect(() => {
        dispatch(getAllMovies({page, genre}))
    }, [page, genre])


    return (
        <div>
            <div className={css.movies}>
                {error && <h2>{error}</h2>}
                {movies.results && movies.results.map(movie => <Movies key={movie.id} movies={movie}/>)}
            </div>
            <div>{movies.page && <PagesComponent page={page}/>}</div>
        </div>
    );
};

export {MoviesPage};