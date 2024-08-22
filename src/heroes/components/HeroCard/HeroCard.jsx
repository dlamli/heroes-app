import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { heroInfo } from "src/router/paths";

const CharactersByHero = ({ alter_ego, characters }) => {
    return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const imgUrl = `/src/assets/images/heroes/${id}.jpg`;

    return (
        <>
            <Col className="animate__animated animate__fadeIn">
                <Card>
                    <Row className="no-gutters">
                        <Col md={4} className="align-self-center">
                            <Card.Img src={imgUrl} alt={superhero} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>{superhero}</Card.Title>
                                <Card.Text>{alter_ego}</Card.Text>
                                <CharactersByHero
                                    characters={characters}
                                    alter_ego={alter_ego}
                                />
                                <Button as={Link} to={`${heroInfo.path}/${id}`}>
                                    More Info
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </>
    );
};
