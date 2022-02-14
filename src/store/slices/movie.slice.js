import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    status: null,
    error: null,
    page: 1
}
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            return await moviesService.getAll(page, genre);

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const changePageThunk = createAsyncThunk(
    'movieSlice/changePageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(changePage(page));
        } catch (e) {
            console.error( e);
        }
    }
);

export const firstPageThunk = createAsyncThunk(
    'movieSlice/firstPageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(firstPage(page));
        } catch (e) {
            console.error('=======changePageThunk\n', e);
        }
    }
);

export const buttonPageThunk = createAsyncThunk(
    'movieSlice/changePageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(changeButtonPage(page));
        } catch (e) {
            console.error(e);
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        changePage: (state, action) => {
            if ((action.payload === -1 && state.page !== 1) || (action.payload === 1 && state.page !== 500)) {
                state.page += action.payload;
            }
        },
        changeButtonPage: (state, action) => {
            state.page = action.payload;
        },

        firstPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = 'Loading';
            state.err = null;
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})


const movieReducer = movieSlice.reducer;
export const {changeButtonPage,firstPage,changePage} = movieSlice.actions


export default movieReducer;