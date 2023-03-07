import { useState, useEffect } from 'react';
// import axios from 'axios'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './App.css'
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { db } from './firebase';
import Hello from './components/hello';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  // // Default
  // const [count, setCount] = useState();

  // // Arreglo
  // const reservaciones = [
  //   {
  //     nombre: 'Fatima',
  //     edad: 25
  //   },
  //   {
  //     nombre: 'Rebeca',
  //     edad: 24
  //   },
  //   {
  //     nombre: 'Alan',
  //     edad: 29
  //   },
  //   {
  //     nombre: 'Rita',
  //     edad: 29
  //   },

  // ]

  // // Api
  // const [joke, setJoke] = useState();

  // const getJoke = async () => {
  //   const response = await axios('https://api.chucknorris.io/jokes/random')
  //   console.log('joke', response)
  //   // setJoke(response.data)
  // }

  // useEffect(() => {
  //   getJoke()
  // }, []);

  // Crud firebase
 
  const [form, setForm] = useState(null);

  // const createProduct = () => {
  //   addDoc(collection(db, 'productos'), {
  //     name: 'camiseta',
  //     sku: '007',
  //     price: '345',
  //     descripcion: 'camiseta'
  //   })
  //   getData
  // }

  const createProduct = () => {
    if(form) {
      addDoc(collection(db, 'reservaciones'), form)
    } else {
      alert('Algo salio mal con el form, esta vacio')
    }
    // getData()
  }

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value
    })
    console.log(form)
  }

  return (
    <div className="App">
      {/* Firebase */}
      <h1>Reservaciones</h1>
      {/* {
        products.map(item => <h3>{item.name}</h3>)
      }
      <button type="button" onClick={() => createProduct()}>Registrar</button> */}


      {/* Default */}
      {/* <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Hello name='Nora' />
      </div> */}
      <Container>
          <Row>
              <Col>
                  <h2>Reserva con nosotros</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem recusandae est corporis nobis in doloremque maxime natus vero blanditiis numquam itaque qui omnis voluptatibus debitis adipisci, quod repudiandae eius?</p>
                  <p>Direccion</p>
                  <p>Telefono</p>
                  <p>Correo</p>
                  <p>Aviso de app</p>
              </Col>
              <Col>
                <Row>
                    
                    <label class="label-form">Tu nombre</label>
                    <input type="text" placeholder='Marco Perez' name='Nombre' onChange={(e) => handleChange(e.target)} />
                    <label class="label-form">Tu correo</label>
                    <input type="text" placeholder='ejemplo@gmail.com' name='Correo' onChange={(e) => handleChange(e.target)} />
                    <label class="label-form">Tu celular</label>
                    <input type="text" placeholder='33256788' name='Telefono' onChange={(e) => handleChange(e.target)} />
                    <label class="label-form">Mesa que vas reservar</label>
                    <input type="text" placeholder='3' name='Mesa' onChange={(e) => handleChange(e.target)} />
                </Row>
                <button type="button" onClick={() => createProduct()}>Guardar</button>
              </Col>
          </Row>
      </Container>
      
      
      
    </div>
  )
}

export default App
