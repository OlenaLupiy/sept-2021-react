import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

export const userService = {
    getAll: ()=>axiosService.get(urls.users).then(value => value.data),
    getUserById: (id)=>axiosService.get(`${urls.users}/${id}`)
        .then(value => value.data),
    getPostsById:(userId)=>axiosService.get(`${urls.users}/${userId}/posts`)
        .then(value => value.data),
    getAlbumsById:(userId)=>axiosService.get(`${urls.users}/${userId}/albums`)
        .then(value => value.data),
    getPhotosById:(userId)=>axiosService.get(`${urls.users}/${userId}/photos`)
        .then(value => value.data)
}