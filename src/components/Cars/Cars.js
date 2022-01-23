import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({car}) => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(value => setCars([...value]))
    }, [car])

    return (
        <div>
            {
                cars.map(car=> <Car key={car.id} car={car}/>)
            }

        </div>
    );
};

export {Cars};