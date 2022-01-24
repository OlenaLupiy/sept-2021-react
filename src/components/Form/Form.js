import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validator/Car.validator";

const Form = ({update, carForUpdate: {id, model, price, year}}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm({
        resolver: joiResolver(CarValidator), mode: "onTouched"
    });

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const submit = async (car) => {
        try {
            let newCar;

            if (id) {
                newCar = await carService.updateById(id, car);
            } else {
                newCar = await carService.create(car);
            }

            update(newCar)

        } catch (error) {
            setFormError(error.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;