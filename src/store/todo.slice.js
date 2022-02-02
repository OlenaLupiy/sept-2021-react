import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        },
        changeStatus:(state, action)=>{
          const todo = state.todoList.find(list=>list.id===action.payload.id)
            todo.status = !todo.status
        },
        deleteTodo:(state, action)=>{
           const number = state.todoList.findIndex(list=>list.id ===action.payload.id)
            state.todoList.splice(number, 1)
        }

    }
})

export const {saveTodo, changeStatus, deleteTodo} = todoSlice.actions
const todoReducer = todoSlice.reducer;
export default todoReducer;





