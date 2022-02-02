import React from 'react';
import {useSelector} from "react-redux";

import {Item} from "../Item/Item";

const Items = () => {

const {todoList} = useSelector(state => state['todo']);

return (
        <div>
            {
                todoList.map(item=> <Item key={item.id} item={item}/>)
            }

        </div>
    );
};

export {Items};