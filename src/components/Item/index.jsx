import './item.css';

import React from 'react';

const Item = ({info}) => {
    return (
        <a href="" className='foto'>
            <img src={info.image} alt="Fuego" />
            <p>{info.title}</p>
        </a>
    )
}
export default Item;