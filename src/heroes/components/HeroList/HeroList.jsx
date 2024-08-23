import { Container, Row } from "react-bootstrap";
import { getHeroByPublisher } from "src/heroes/helpers";
import { HeroCard } from "src/heroes/components";
import { memo, useMemo } from "react";

export const HeroList = memo(({ publisher }) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <Container>
            <Row md={3} className="g-3">
                {heroes.map((hero) => (
                    <HeroCard key={hero.id} {...hero} />
                ))}
            </Row>
        </Container>
    );
});
