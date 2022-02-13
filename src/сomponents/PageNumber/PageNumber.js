import React from 'react';
import {useDispatch} from "react-redux";

import {buttonPageThunk} from "../../store";
import '../../components.css';


const PageNumber = ({arr, page}) => {
    const dispatch = useDispatch();


    return (
        <button onClick={() => dispatch(buttonPageThunk(arr))}
                className={arr === page ? "currentPageNumber" : "notCurrentPageNumber"}
                >
            {arr}
        </button>
    );
};

export {PageNumber};