import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Routing, NavBar } from "./components";

export const HeroesApp = () => {
    return (
        <>
            <NavBar />
            <Container className="pt-5 pb-5">
                <Row>
                    <h1>HeroesApp</h1>
                    <hr />
                </Row>
                <Routing />
            </Container>
        </>
    );
};
