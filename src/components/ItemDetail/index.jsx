import './itemDetail.css';
import ItemCount from '../itemCount';
import React, {useState} from "react";

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
    <div className="container">
        <div className="detail">
            <img className="detail_image" src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                {
                    goToCart
                    ? <link to='/cart'>Terminar compra</link>
                :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>   
    </div>
    );
}

export default ItemDetail;