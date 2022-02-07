// import {carService} from "../../services/car.service";
//
// const Car = ({car, update, setCarForUpdate}) => {
//     const {id, model, price, year} = car;
//
//     const deleteCar = async () => {
//         await carService.deleteById(id);
//         update({})
//     }
//     return (
//         <div>
//             <div>id: {id}</div>
//             <div>model: {model}</div>
//             <div>price: {price}</div>
//             <div>year: {year}</div>
//             <button onClick={()=>setCarForUpdate(car)}>Update</button>
//             <button onClick={()=>deleteCar()}>Delete</button>
//             <hr/>
//         </div>
//     );
// };
//
// export default Car;
import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car, update, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async() => {
     await carService.deleteById(id);
     update({})
    }

    return (
        <div>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={()=>deleteCar(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;