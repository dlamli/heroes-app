import { MARVEL_COMIC } from "src/global/constants/variables";
import { HeroList } from "src/heroes/components";

export const Marvel = () => {
    return (
        <>
            <h1>Marvel</h1>
            <hr />
            <HeroList publisher={MARVEL_COMIC} />
        </>
    );
};
