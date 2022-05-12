import React, {useState} from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavbarComp() {
  return (
    <Navbar bg="dark" variant='dark' expand='lg' fixed="top">
        <Container>
            <Navbar.Brand href="#home">Ivan Pranata Gunawan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#portofolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )     
}

export default NavbarComp