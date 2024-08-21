import { heroes } from "src/heroes/data/heroes";

export const getHeroByPublisher = (publisher) => {
    const validPublisher = ["DC Comics", "Marvel Comics"];

    if (!validPublisher.includes(publisher)) {
        throw new Error("Invalid publisher");
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
