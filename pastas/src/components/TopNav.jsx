import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TopNav.css';
import { FaSearch } from "react-icons/fa";
import Logo from '../logo.png';

const TopNav = () => {  
    return(
        <Navbar className='navBar' expand="lg">
            <Container>
                { /*Logo Twe-LIB*/ }
                <Navbar.Brand className='logo' as={Link} to="/">
                    <img src={Logo}
                         alt="Logo"
                    />
                    <b>TwE-LIB</b>
                </Navbar.Brand>

                { /*Menu Hambúrger Mobile*/ }
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    { /*Links de Navegação*/ }
                    <Nav className="me-auto">
                        <Nav.Link className='navBar-links' as={Link} to="/read">Ler</Nav.Link>
                        <Nav.Link className='navBar-links' as={Link} to="/make">Criar</Nav.Link>
                        <Nav.Link className='navBar-links' as={Link} to="/autors">Autores</Nav.Link>
                        <Nav.Link className='navBar-links' 
                                  href="https://instagram.com/twe_lib" 
                                  target="_blank" 
                                  rel="noopener noreferrer">
                            Sobre Nós
                        </Nav.Link>
                    </Nav>

                    { /*Barra de Pesquisa*/ }
                    <Form className='d-flex'>
                        <FormControl
                            type='search'
                            placeholder='Pesquisar'
                            className="me-2"
                            aria-label="Search"
                            id='searchBar'
                        />

                        <Button type='submit' variant="outline-none" id='searchButton'>
                            <FaSearch style={{ color: '#007b7f' }}/>
                        </Button>
                    </Form>

                        <Button id="btn-login" as={Link} to="/login">Entrar</Button>
                        <Button id="btn-register" as={Link} to="/register">Cadastrar</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;