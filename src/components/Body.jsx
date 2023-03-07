import React from "react";
import Footer from "./Footer";
import Reservaciones from "./Reservaciones";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Body () {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Menu</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/body">Reservaciones</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Reservaciones />
        <Footer />
      </>
    )
}

export default Body;