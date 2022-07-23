import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const foto = {id:1, image: "https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg", title: "Fuego"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(foto);
            }, 3000);
        });
        
        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;