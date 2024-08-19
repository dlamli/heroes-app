import { Container, Row } from "react-bootstrap";

export const ErrorPage = () => {
    return (
        <Container>
            <Row>
                <div className="fw-bold mt-5 text-center">
                    <h1>Error 404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you&apos;re looking for doesn&apos;t exist.</p>
                </div>
            </Row>
        </Container>
    );
};
