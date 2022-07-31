import React, { useEffect, useState } from "react";


import Title from "../Title";
import ItemList from '../ItemList';
import { useParams } from "react-router-dom";

const fotos = [
    {id:1, image: "https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg", category: "1", title: "Fuego"},
    {id:2, image: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800", category: "2", title: "colores"},
    {id:3, image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg", category: "1", title: "cesped"}
];




export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(fotos);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(foto => foto.category === categoriaId)));
        }else {
            getData.then(res => setData(res));
        }
    }, [categoriaId]);
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades `);
    }
    
    return (
        <>
        <Title greeting = {texto} />
        <ItemList data={data}/>
        </>
    );
}



export default ItemListContainer;