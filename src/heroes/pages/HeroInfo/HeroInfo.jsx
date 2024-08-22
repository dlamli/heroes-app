import { useMemo } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { MARVEL_BRAND } from "src/global/constants/variables";
import { getHeroById } from "src/heroes/helpers";
import { dc, marvel } from "src/router/paths";

export const HeroInfo = () => {
    const { heroId } = useParams();
    const currentPath = useLocation().pathname;
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const onNavigateBack = () => {
        currentPath.includes(MARVEL_BRAND)
            ? navigate(marvel.path, {
                  replace: true,
              })
            : navigate(dc.path, {
                  replace: true,
              });
    };

    if (!hero) return <Navigate to="/marvel" />;
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <img
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                            src={`/src/assets/images/heroes/${heroId}.jpg`}
                            alt={hero.superhero}
                        />
                    </Col>
                    <Col md={8} className="">
                        <h1>Hero Information</h1>
                        <p>{hero.superhero}</p>
                        <p>{hero.first_appearance}</p>
                        <p>{hero.publisher}</p>

                        <Button onClick={onNavigateBack}>Back</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
