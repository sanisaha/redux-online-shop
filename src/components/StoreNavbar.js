import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const StoreNavbar = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href = '/'>
                    Redux Online Store
                </Navbar.Brand>
                <Nav className=''>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/cart'>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default StoreNavbar;