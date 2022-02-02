import React from 'react';
import {useDispatch} from "react-redux";
import {saveTodo} from "../../store";

const Form = () => {
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(saveTodo({todo:e.target.todo.value}))
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'todo'}/>
                <button>Add</button>
            </form>
        </div>
    );
};

export  {Form};
