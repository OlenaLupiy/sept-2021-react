
import {urls} from "../../configs/urls";
import {axiosService} from "./axios.service";

export const carService = {
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    create:(car)=>axiosService.post(urls.cars, car).then(value => value.data),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById:(id, car)=>axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}