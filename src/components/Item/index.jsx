import './item.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className='foto'>
            <img src={info.image} alt="Fuego" />
            <p>{info.title}</p>
        </Link>
    )
}
export default Item;