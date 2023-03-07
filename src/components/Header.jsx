import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header () {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <img class="header-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwSC8JPn6QuOySizaF7fjcceKJXjep92bNA&usqp=CAU" alt="" />
                </Col>
                <Col>
                    <h1>Pizza Toñito</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium atque est illo delectus molestias. Odit numquam praesentium saepe repudiandae et? Molestias atque et pariatur. Sunt, sequi! Blanditiis, porro iure!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laborum dignissimos? Odit, fugit. Et debitis a aspernatur. Nam amet reiciendis fugiat, nihil velit corrupti impedit eveniet veniam laboriosam nobis enim.</p>
                    <hr />
                    <Container>
                        <Row>
                            <Col>Nacimiento</Col>
                            <Col>Rating</Col>
                        </Row>
                        <Row>
                            <Col>1998</Col>
                            <Col>*****</Col>
                        </Row>
                    </Container>
                    <hr />
                    <Container>
                        <Row>
                            <Col>Ubicacion</Col>
                            <Col>Rised</Col>
                        </Row>
                        <Row>
                            <Col>Guadalajara</Col>
                            <Col><p>$25m</p></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Header