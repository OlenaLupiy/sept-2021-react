import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";
import genreReducer from "./slices/genre.slice";
import infoReducer from "./slices/info.slice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
        info: infoReducer,
    }
});
export default store;