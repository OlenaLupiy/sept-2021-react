import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store";
import {Genres} from "../../сomponents";

const GenresPage = () => {
    const {genres, status, error} = useSelector(state => state['genre']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <div>{genres.genres?.map(genre => <Genres key={genre.id} genres={genre}/>)}</div>

        </div>
    );
};

export {GenresPage};