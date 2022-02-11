import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getInfoAboutMovie} from "../../store";

const MovieDetailsPage = () => {
    const {id} =useParams();
    const {movies:{results}} = useSelector(state=>state['movie']);
    const dispatch = useDispatch();
    const {state} = useLocation();
    if(state){
        dispatch(getInfoAboutMovie(id))
    }
    {
        useEffect(()=>{
            dispatch(getInfoAboutMovie(id))
        },[id])
    }

    return (
        <div>
            {results && results.map()}
        </div>
    );
};

export  {MovieDetailsPage};