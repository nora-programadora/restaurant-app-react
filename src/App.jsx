import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
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
import Hello from './components/hello'

function App() {
  // Default
  const [count, setCount] = useState();

  // Arreglo
  const reservaciones = [
    {
      nombre: 'Fatima',
      edad: 25
    },
    {
      nombre: 'Rebeca',
      edad: 24
    },
    {
      nombre: 'Alan',
      edad: 29
    },
    {
      nombre: 'Rita',
      edad: 29
    },

  ]

  // Api
  const [joke, setJoke] = useState();

  const getJoke = async () => {
    const response = await axios('https://api.chucknorris.io/jokes/random')
    console.log('joke', response)
    // setJoke(response.data)
  }

  // useEffect(() => {
  //   getJoke()
  // }, []);

  // Crud firebase
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(null);

  const getData = () => {
    const arrData = [];

    onSnapshot(collection(db, 'productos'), (snapshot) => {
      snapshot.docs.forEach((item) => {
        console.log('FIREBASE:', item.data())

        arrData.push({
          ...item.data(),
          id: item.id
        })

        console.log(arrData);
        setProducts(arrData);
      })
    })
  }

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
      addDoc(collection(db, 'productos'), form)
    } else {
      alert('Algo salio mal con el form, esta vacio')
    }
    getData()
  }


  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value
    })
    console.log(form)
  }

  const onUpdate = async (id, name) => {
    console.log(id, name)
    const newFields = { name: name + ' actualizado '};
    await updateDoc(doc(db, 'productos', id), newFields)
    getData()
  }


  const onDelete = async (id) => {
    console.log(id)
    await deleteDoc(doc(db, 'productos', id))
    getData()
  }


  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="App">
      {/* Firebase */}
      <h1>Firebase</h1>
      {/* {
        products.map(item => <h3>{item.name}</h3>)
      }
      <button type="button" onClick={() => createProduct()}>Registrar</button> */}

      <input type="text" placeholder='name' name='name' onChange={(e) => handleChange(e.target)} />
      <input type="text" placeholder='sku' name='sku' onChange={(e) => handleChange(e.target)} />
      <input type="text" placeholder='price' name='price' onChange={(e) => handleChange(e.target)} />
      <input type="text" placeholder='descripcion' name='descripcion' onChange={(e) => handleChange(e.target)} />
      <button type="button" onClick={() => createProduct()}>Guardar</button>

      {
        products.map(item => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => onDelete(item.id)}>x</button>
            <button onClick={() => onUpdate(item.id, item.name)}>update</button>
          </div>
        ))
      }

      {/* Default */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Hello name='Nora' />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Arreglo */}
      <Container>
        <Row>
        {
          reservaciones.map((item, index) => (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Reservacion {item.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.edad}</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          ))
        }
        </Row>
      </Container>
      
      {/* Api */}
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  La broma deberia estar aqui
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
