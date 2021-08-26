import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { changePage } from "../data/pageFile";
import { useDispatch, useSelector } from 'react-redux';


const NavComponent = () => {
    const page = useSelector(state => state.page.value);
    const dispatchAction = useDispatch();

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">Fuzzy Pancake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">{page}</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={
                                () => dispatchAction(changePage(0))
                            } >Page 1</NavDropdown.Item>
                            <NavDropdown.Item onClick={
                                () => dispatchAction(changePage(1))
                            } >Page 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={
                                () => dispatchAction(changePage(2))
                            } >All Page</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent;