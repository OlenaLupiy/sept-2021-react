import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album
    return (
        <div>
            <div>{userId}) {title}</div>
            <Link to={`${id}/photos`} state={album.id}>
                <button>See photos</button>
            </Link>

        </div>
    );
};

export {Album};