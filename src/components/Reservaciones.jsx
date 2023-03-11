import React from "react";
import { useState, useEffect } from 'react';
import {
    onSnapshot,
    collection,
    addDoc,
    doc,
    deleteDoc,
    setDoc,
    updateDoc
  } from 'firebase/firestore';
import { db } from './../firebase';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Reservaciones = () => {
    // const [products, setProducts] = useState([]);

    // const getData = () => {
    //     const arrData = [];
    
    //     onSnapshot(collection(db, 'reservaciones'), (snapshot) => {
    //       snapshot.docs.forEach((item) => {
    //         console.log('FIREBASE:', item.data())
    
    //         arrData.push({
    //           ...item.data(),
    //           id: item.id
    //         })
    
    //         console.log(arrData);
    //         setProducts(arrData);
    //       })
    //     })
    // }

    // const onUpdate = async (id, name) => {
    // console.log(id, name)
    // const newFields = { Nombre: name + ' actualizado '};
    // await updateDoc(doc(db, 'reservaciones', id), newFields)
    // getData()
    // }


    // const onDelete = async (id) => {
    // console.log(id)
    // await deleteDoc(doc(db, 'reservaciones', id))
    // getData()
    // }


    // useEffect(() => {
    // getData()
    // }, []);

    // console.log('propiedades', props)
    return (
        <>
        {/* <Container>
        {
            products.map(item => (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Mesa: {item.Mesa}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">A nombre de: {item.Nombre}</Card.Subtitle>
                <button onClick={() => onDelete(item.id)}>x</button>
                <button onClick={() => onUpdate(item.id, item.Nombre)}>update</button>
                </Card.Body>
            </Card>
            </>
            ))
        }
        </Container> */}
        </>
    )
}

export default Reservaciones;