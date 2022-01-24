import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car, update, setCarForUpdate}) => {
    const {id, model, price, year} = car;
    const deleteCar = async () => {
        await carService.deleteById(id);
        update({})

    }
    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;