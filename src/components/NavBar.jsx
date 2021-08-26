import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from "../data/pageFile";


const NavComponent = () => {
    const page = useSelector(state => state.page.value);
    const login = useSelector(state => state.boolRed.value);
    const dispatchAction = useDispatch();

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">Fuzzy Pancake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                        >{login ? "Logged in" : "Login"}</Nav.Link>
                        <Nav.Link >{page}</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={
                                () => dispatchAction(changePage("Counter"))
                            } >Page 1</NavDropdown.Item>
                            <NavDropdown.Item onClick={
                                () => dispatchAction(changePage("BoolFlip"))
                            } >Page 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={
                                () => dispatchAction(changePage("All"))
                            } >All Page</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavComponent;