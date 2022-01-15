import {urls} from "../config/urls";

const getByUserId = (id)=>{
    return fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json())

}

export {getByUserId}