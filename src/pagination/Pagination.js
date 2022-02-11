import React from 'react';
import {Link} from "react-router-dom";

function Pagination({listId}) {
    return (
        <div>
            <p>
                {listId !== 1 && <Link className={'link'} to={'/list/1'}> 1</Link>}

                {listId > 5 && <Link className={'link'} to={'/list/' + (listId - 4)}>{listId - 4}</Link>}
                {listId > 4 && <Link className={'link'} to={'/list/' + (listId - 3)}>{listId - 3}</Link>}
                {listId > 3 && <Link className={'link'} to={'/list/' + (listId - 2)}>{listId - 2}</Link>}
                {listId > 2 && <Link className={'link'} to={'/list/' + (listId - 1)}>{listId - 1}</Link>}

                <Link className={'selected'} to={'/list/' + listId}>{listId}</Link>

                {listId < 499 && <Link className={'link'} to={'/list/' + (listId + 1)}>{listId + 1}</Link>}
                {listId < 498 && <Link className={'link'} to={'/list/' + (listId + 2)}>{listId + 2}</Link>}
                {listId < 497 && <Link className={'link'} to={'/list/' + (listId + 3)}>{listId + 3}</Link>}
                {listId < 496 && <Link className={'link'} to={'/list/' + (listId + 4)}>{listId + 4}</Link>}

                {listId !== 500 && <Link className={'link'} to={'/list/500'}>500</Link>}


            </p>
        </div>
    );
}

export default Pagination;