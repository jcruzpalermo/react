import React, {useEffect, useState} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";


//1 - Traer el servicio de firestore
//2 - Crear un puntero al dato que queremos traer
//3 - Traer el dato con una promesa 


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc).then((res) => setData({id: res.id, ...res.data()}))
    }, [detalleId]);

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;