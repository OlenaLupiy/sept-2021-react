import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genre: []
}
const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{

    }
});

const genreReducer = genreSlice.reducer;
export default genreReducer;

export const {} = genreSlice.actions;