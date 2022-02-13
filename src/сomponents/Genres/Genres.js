import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { addGenreThunk} from "../../store";
import Badges from "../Badges/Badges";

const Genres = ({genres:{id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>{id} {name}</div>
            <Link to={'/movies'} onClick={()=>{dispatch(addGenreThunk(id))}}>

            </Link>
        </div>
    );
};

export {Genres};