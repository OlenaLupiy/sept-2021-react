import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const initialState={
    movieInfo:{},
    status: null,
    error: null
}

const getInfo = createAsyncThunk(
    'infoSlice/getInfo',
    async (id, {rejectedWithValue})=>{
        try{
            return await moviesService.getInfo(id)
        }catch (e){
          return   rejectedWithValue(e.message)
        }
    }
)


const infoSlice = createSlice({
    name:'infoSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getInfo.fulfilled]:(state, action)=>{
            state.movieInfo = action.payload
        }
    }
    }

)
const infoReducer = infoSlice.reducer;
export default infoReducer;