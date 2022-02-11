import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {getAllMovies} from "../../store";

const Movies = () => {

    return (
        <div>

            {/*<Outlet/>*/}
        </div>
    );
};

export {Movies};