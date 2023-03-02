import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import { Button, Card, Container, Row } from 'react-bootstrap'
import './App.css'
import Hello from './components/hello'

function App() {

  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState();

  const getJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await axios.get(url);
    console.log('joke ', response);
    setJoke(response.data);
  }

  useEffect(() => {
    getJoke()
  }, []);

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

  return (
    <div className="App">
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
        <Container>
        <Card>
          <Card.Header>Chuk Norris API</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Container>
    </div>
  )
}

export default App
