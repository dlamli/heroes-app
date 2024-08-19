import { HeroesApp } from "src/HeroesApp";
import { DC, ErrorPage, Login, Marvel } from "src/heroes/pages";

export const routingPath = {
    heroesApp: {
        path: "/",
        component: <HeroesApp />,
    },
    marvel: {
        path: "/marvel",
        component: <Marvel />,
    },
    dc: {
        path: "/dc",
        component: <DC />,
    },
    login: {
        path: "/login",
        component: <Login />,
    },
    error: {
        component: <ErrorPage />,
    },
};
