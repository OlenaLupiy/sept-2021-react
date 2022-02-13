import {axiosService} from "./axios.service";


import {urls} from "../configs";

export const moviesService = {
    getAll: (page, genre) => axiosService.get(urls.movies(page, genre)).then(value => value.data),
    getInfo: (id) => axiosService.get(urls.genres(id)).then(value => value.data)
}
