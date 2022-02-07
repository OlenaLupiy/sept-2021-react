import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

// import {carService} from "../../services/car.service";
// import {CarValidator} from "../../validators/car.validator";
//
// const Form = ({update, carForUpdate: {id, model, price, year}}) => {
//
//     const [formError, setFormError] = useState({});
//
//     const {
//         register, handleSubmit, formState: {errors}, setValue
//     } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});
//
//     useEffect(() => {
//         setValue('model', model)
//         setValue('price', price)
//         setValue('year', year)
//     }, [id])
//
//     const submit = async (car) => {
//         try {
//             let newCar;
//
//             if (id) {
//                 newCar = await carService.updateById(id, car);
//             } else {
//                 newCar = await carService.create(car);
//             }
//
//             update(newCar)
//
//         } catch (error) {
//             setFormError(error.response.data)
//         }
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit(submit)}>
//                 <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
//                 {/*{formError.model && <span>{formError.model[0]}</span>}*/}
//                 {errors.model && <span>{errors.model.message}</span>}
//                 <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
//                 {/*{formError.price && <span>{formError.price[0]}</span>}*/}
//                 {errors.price && <span>{errors.price.message}</span>}
//                 <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
//                 {/*{formError.year && <span>{formError.year[0]}</span>}*/}
//                 {errors.year && <span>{errors.year.message}</span>}
//                 <button>{id ? 'Update' : 'Create'}</button>
//             </form>
//         </div>
//     );
// };
//
// export default Form;
import React from 'react';
import {carService} from "../../services/car.service";

const Form = ({update, carForUpdate}) => {

    const {id, model, price, year} = carForUpdate

    const {register, handleSubmit, setValue} = useForm();
    useEffect(()=>{
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const submit = async(car) => {
        let newCar;
        if(id){
            newCar = await carService.updateById(id, car)
        } else{
            newCar=  await carService.create(car);
        }

        update(newCar)

    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                <button>{id? 'Update' : 'Create'}</button>

            </form>
        </div>
    );
};

export default Form;