import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Title from "../Title";
import ItemList from '../ItemList';
import { useParams } from "react-router-dom";

//1 - Traer el servicio de firestore
//2 - Crear un puntero al dato que queremos traer
//3 - Traer el dato con una promesa




export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...res.data() }))))     
        }else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...res.data() }))))
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