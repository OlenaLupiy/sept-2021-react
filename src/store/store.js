import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movie.slice";
import genreReducer from "./slices/genre.slice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        genre: genreReducer,
    }
});
export default store;