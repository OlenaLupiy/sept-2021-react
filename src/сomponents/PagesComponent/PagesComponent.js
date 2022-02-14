import React from 'react';
import { useDispatch} from "react-redux";

import {changePageThunk} from "../../store";
import css from './PagesComponent.module.css'


const PagesComponent = ({page}) => {
    const dispatch = useDispatch();


    let min = page;
    let max = page;

    if(page.toString().length === 1){
        min = 1;
        max = 10;
    } else {
        for (let i=0; i < 9; i++){
            if(min%10 !== 0) min--;
            if(max %10 !== 0) max++;
        }
    }
    if (min === max && max === 500) min = max - 10;
    if (min === max) max = min + 10;


    return (
        <div className={css.pages}>

                <button  onClick={() => dispatch(changePageThunk(-1))}>Prev</button>

                <button onClick={() => dispatch(changePageThunk(1))}>Next</button>

        </div>
    );
};

export {PagesComponent};