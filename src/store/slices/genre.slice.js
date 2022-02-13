import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) =>{
        try {
            return await genreService.getAll()
        }catch (e){
           return rejectWithValue(e.message)
        }
    }
)
export const addGenreThunk = createAsyncThunk(
    'genresSlice/addGenreThunk',
    async (genre,{dispatch})=>{
        try {
            dispatch(addGenre(genre))
        }catch (e) {
            console.error()
        }
    }
)

const initialState = {
    genres: [],
    status:null,
    error:null,
    genre:null
}
const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{
     addGenre:(state, action)=>{
         state.genre = action.payload;
     }
    },
    extraReducers:{
        [getAllGenres.pending]:(state)=>{
            state.status = 'loading'
        },
        [getAllGenres.fulfilled]:(state, action)=>{
            state.genres = action.payload
        },
        [getAllGenres.rejected]:(state, action)=>{
            state.error = action.payload
        },
    }
});

const genreReducer = genresSlice.reducer;
export default genreReducer;

export const {addGenre} = genresSlice.actions;