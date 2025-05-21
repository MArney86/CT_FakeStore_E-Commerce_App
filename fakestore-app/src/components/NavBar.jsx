import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavBar() {
    return (
        <Navbar bg="info" variant="dark" expand="lg" className="p2 mb-2">
            <Navbar.Brand>FakeStore Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="Fs-navbar-nav" />
            <Navbar.Collapse id="Fs-navbar-nav">
                <Nav>
                    <Nav.Link as={NavLink} to="/" activeclassname="active">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/Products" activeclassname="active">Products</Nav.Link>
                    <NavDropdown title="Product Tools">
                        <NavDropdown.Item href="/AddProduct">Add a Product</NavDropdown.Item>
                        <NavDropdown.Item href="/EditProduct">Edit a Product</NavDropdown.Item>
                        <NavDropdown.Item href="/DeleteProduct">Delete a Product</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}