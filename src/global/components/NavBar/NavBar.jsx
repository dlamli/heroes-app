import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { dc, heroesApp, login, marvel } from "src/router/paths";

export const NavBar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate(login.path, {
            replace: true,
        })
    };

    return (
        <>
            <Navbar
                bg="dark"
                collapseOnSelect
                expand="lg"
                className="bg-body-tertiary mb-4"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand as={Link} to={heroesApp.path}>
                        HeroesApp
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to={marvel.path}>
                                Marvel
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={dc.path}>
                                DC
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <span className="nav-link nav-item text-info">
                                Welcome: User
                            </span>
                            <Button variant="outline-info" onClick={onLogout}>
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
