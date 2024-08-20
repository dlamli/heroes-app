import { HeroesApp } from "src/HeroesApp";
import { DC, ErrorPage, Login, Marvel } from "src/heroes/pages";

const routingPath = {
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

export const { heroesApp, marvel, dc, login, error } = routingPath;