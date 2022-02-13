import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store";

import {Genres} from "../../сomponents";

const GenresPage = () => {
    const {genres, status, error} = useSelector(state=>state['genre']);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllGenres())
    }, [])
console.log(genres.genres)
    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {genres.genres?.map(genre=> <Genres key={genre.id} genres={genre}/>)}

        </div>
    );
};

export {GenresPage};