import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom'

import {userService} from "../../services/user.service";
import {Album} from "../../components/Album/Album";
import css from './AlbumPage.module.css'

const UserAlbumsPage = () => {
    const {state} = useLocation();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsById(state).then(value => setAlbums([...value]))

    })

    return (
        <div>
            <div className={css.album}>
                <div>{albums.map(album => <Album key={album.id} album={album}/>)}</div>
                <div><Outlet/></div>
            </div>

        </div>
    );
};

export {UserAlbumsPage};
