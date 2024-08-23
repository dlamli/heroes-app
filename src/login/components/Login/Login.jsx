import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/auth";
import { marvel } from "src/router/paths";

export const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
        const lastPath = localStorage.getItem("lastPath") || marvel.path;

        login("Danny");

        navigate(lastPath, {
            replace: true, // Replace the current history entry with the new one
            // state: { from: heroesHome.path }, // Pass the current path as state when redirecting to DC heroes page
        });
    };
    return (
        <>
            <Container>
                <Row className="mt-5 w-50 mx-auto justify-content-center">
                    <h1 className="mb-4 text-center">HeroesApp</h1>
                    <button className="btn btn-primary w-25" onClick={onLogin}>
                        Login
                    </button>
                </Row>
            </Container>
        </>
    );
};
