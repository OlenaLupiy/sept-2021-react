import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList:[]
}
const todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
    saveTodo:(state, action)=>{
        state.todoList.push(action.payload)
    }

}
})

export const {saveTodo} = todoSlice.actions
const todoReducer = todoSlice.reducer;
export default todoReducer;





