import React from 'react';
import css from './Item.module.css'
import {useDispatch} from "react-redux";
import {changeStatus, deleteTodo} from "../../store";


const Item = ({item:{id, name, status}}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.item}>
            <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
             <div className={status?css.done : ''}>{name}</div>
            <button onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export {Item};