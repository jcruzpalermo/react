import React, { useEffect, useState } from "react";

import ItemCount from '../itemCount';
import Title from "../Title";
import ItemList from '../ItemList';

const fotos = [
    {id:1, image: "https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg", title: "Fuego"},
    {id:2, image: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800", title: "colores"},
    {id:3, image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg", title: "cesped"}
];




export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(fotos);
            }, 3000);
        });
        getData.then(res => setData(res));


    }, []);
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades `);
    }
    
    return (
        <>
        <Title greeting = {texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    );
}



export default ItemListContainer;