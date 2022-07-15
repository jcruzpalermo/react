import Item from "../Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(foto => <Item key={foto.id} info={foto}/>)
    );
}

export default ItemList;