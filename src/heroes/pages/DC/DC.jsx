import { DC_COMIC } from "src/global/constants/variables";
import { HeroList } from "src/heroes/components";

export const DC = () => {
    return (
        <>
            <h1>DC</h1>
            <hr />
            <HeroList publisher={DC_COMIC} />
        </>
    );
};
