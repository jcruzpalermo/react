import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const fotos = [
    {id:1, price:100, image: "https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg", category: "1", title: "Fuego"},
    {id:2, price:120, image: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800", category: "2", title: "colores"},
    {id:3, price:150, image: "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg", category: "1", title: "cesped"}
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(fotos);
            }, 3000);
        });
        
        getData.then(res => setData(res.find(foto => foto.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;