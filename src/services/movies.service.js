import {axiosService} from "./axios.service";
import {apiKey} from "../configs";

import {urls} from "../configs";

export const moviesService = {
    getAll: () => axiosService.get(`${urls.movies}?api_key=${apiKey}?page=`).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movies}/${id}?api_key=${apiKey}`).then(value => value.data),
   getMoviesList:(id)=>axiosService.get(`${urls.movies}/${id}/lists?api_key=${apiKey}&language=en-US&page=`).then(value => value.data)
}
