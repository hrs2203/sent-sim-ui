import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export function NavComponent() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">Fuzzy Pancake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Details About Product</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}