import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    status: null,
    error: null
}
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {rejectWithValue})=> {
        try{
         return  await moviesService.getAll();

        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
export const getInfoAboutMovie = createAsyncThunk(
    'movieSlice/getInfoAboutMovie',
    async ({id})=>{
        try {
       return  await moviesService.getById(id)
        }catch (e) {

        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [getAllMovies.pending]:(state, action)=>{
         state.status = 'Loading'
        },
        [getAllMovies.fulfilled]:(state, action)=>{
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [getAllMovies.rejected]:(state, action)=>{
            state.error = action.payload
        },
        [getInfoAboutMovie.fulfilled]:(state, action)=>{
            state.movies = action.payload
        }
    }
})


const movieReducer = movieSlice.reducer;

export default movieReducer;