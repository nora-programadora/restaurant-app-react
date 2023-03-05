import React from "react";

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
        </>
    )
}

export default Body