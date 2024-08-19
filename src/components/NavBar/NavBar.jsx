import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">DC</Nav.Link>
                        <Nav.Link href="">Marvel</Nav.Link>
                        <Nav.Link href="">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
