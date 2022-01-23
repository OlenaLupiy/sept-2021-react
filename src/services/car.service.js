import axiosService from "./axios.service";

import {urls} from "../config/urls";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`)

}