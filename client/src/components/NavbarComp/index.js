import React from 'react';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">AlgoRhythm</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/playlist">Playlists</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search Songs</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp;