import React from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import './Home.css';
import Fundo from '../assets/images/fundo.webp';

const Home = () => {
    return (
        <Container fluid className="container container" id="container">
            <br />
            <br />
            <br />
            <br />
            {/*Carrossel de imagens dos livros em alta*/}
            <Row>
                <Col md={12} className="linha">
                    <h2 className="mb-3">Em alta</h2>
                </Col>
            </Row>
            <center>
            <Carousel indicators={false} interval={8000}>
                <Carousel.Item>
                    <Row className="p-3 hotBooks">
                        <Col md={3}>
                            <Card className="shadow card">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 1</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 1</Card.Text>
                                    <Card.Text>R$ 36,99</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 2</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 2</Card.Text>
                                    <Card.Text>R$ 21,99</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body className="text-center">
                                    <Card.Title classname="bookInfo">Livro 3</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 3</Card.Text>
                                    <Card.Text>R$ 45,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="shadow card">
                                <Card.Img classname="card-img" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 4</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 4</Card.Text>
                                    <Card.Text>R$ 29,90</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="justify-content-center">
                    <Row className="p-3 container container hotBooks">
                        <Col md={3}>
                            <Card className="shadow card">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 5</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 5</Card.Text>
                                    <Card.Text>R$ 40,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 6</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 6</Card.Text>
                                    <Card.Text>R$ 25,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 7</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 7</Card.Text>
                                    <Card.Text>R$ 50,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 8</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 8</Card.Text>
                                    <Card.Text>R$ 30,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            </center>
            {/*Carrossel de imagens dos livros novidades*/}
            <Row>
                <Col md={12} className="linha">
                    <h2 className="mb-3">Novidades</h2>
                </Col>
            </Row>
            <center>
            <Carousel indicators={false} interval={8000}>
                <Carousel.Item>
                    <Row className="p-3 hotBooks">
                        <Col md={3}>
                            <Card className="shadow card">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 1</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 1</Card.Text>
                                    <Card.Text>R$ 36,99</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 2</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 2</Card.Text>
                                    <Card.Text>R$ 21,99</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body className="text-center">
                                    <Card.Title classname="bookInfo">Livro 3</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 3</Card.Text>
                                    <Card.Text>R$ 45,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="shadow card">
                                <Card.Img classname="card-img" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 4</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 4</Card.Text>
                                    <Card.Text>R$ 29,90</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className="justify-content-center">
                    <Row className="p-3 container container hotBooks">
                        <Col md={3}>
                            <Card className="shadow card">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 5</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 5</Card.Text>
                                    <Card.Text>R$ 40,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 6</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 6</Card.Text>
                                    <Card.Text>R$ 25,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 7</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 7</Card.Text>
                                    <Card.Text>R$ 50,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="h-100 shadow">
                                <Card.Img classname="cardImg" variant="top" src={Fundo} />
                                <Card.Body>
                                    <Card.Title classname="bookInfo">Livro 8</Card.Title>
                                    <Card.Text classname="bookInfo">Autor 8</Card.Text>
                                    <Card.Text>R$ 30,00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            </center>
        </Container>
    );
}

export default Home;