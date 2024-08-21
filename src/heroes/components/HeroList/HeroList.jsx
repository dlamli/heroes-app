import { getHeroByPublisher } from "src/heroes/helpers/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <ul>
            {
                heroes.map((hero) => (
                    <li key={hero.id}>{hero.superhero}</li>
                ))
            }
        </ul>
    );
};
