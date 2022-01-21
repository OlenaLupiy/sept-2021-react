import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";

const PhotosPage = () => {

    const {albumId} = useParams()
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        userService.getPhotosById(albumId).then(value => setPhotos([...value]))
    }, [albumId])

    return (
        <div>
            {
                photos.map(photo => <div key={photo.id}>
                    <div>{photo.id}</div>
                    <img src={photo.url} alt={'photo'}/>
                </div>)
            }
        </div>
    );
};

export {PhotosPage};