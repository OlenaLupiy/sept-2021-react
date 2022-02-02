import React, {useState} from 'react';

import {saveTodo} from "../../store";

import {useDispatch} from "react-redux";


const Form = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const inputHandler = (e) => {
      setInput(e.target.value)
    }
    const addTodo = () => {
        dispatch(saveTodo({
            id:new Date().getTime(),
            item: input,
            done:false

        }))

    }
    return (
        <div className={'input'}>
            <input type="text" value={input} onChange={inputHandler}/>
            <button onClick={addTodo}>Add</button>

        </div>
    );
};

export {Form};