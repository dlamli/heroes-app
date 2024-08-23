import { HeroesApp } from "src/HeroesApp";
import { HeroesRoutes } from "src/heroes";
import {
    DC,
    ErrorPage,
    HeroesHome,
    HeroInfo,
    Marvel,
    Search,
} from "src/heroes/pages";
import { Login } from "src/login/components/Login/Login";

const routingPath = {
    // ----------------------------------------------------------------
    // Login Paths
    login: {
        path: "/",
        component: <Login />,
    },
    heroesRoute: {
        path: "/*",
        component: <HeroesRoutes />,
    },
    // ----------------------------------------------------------------
    // Heroes Paths
    heroesApp: {
        path: "/",
        component: <HeroesApp />,
    },
    // heroesHome: {
    //     path: "/",
    //     component: <HeroesHome />,
    // },
    marvel: {
        path: "/marvel",
        component: <Marvel />,
    },
    dc: {
        path: "/dc",
        component: <DC />,
    },
    search: {
        path: "/search",
        component: <Search />,
    },
    heroInfo: {
        path: "/heroes",
        component: <HeroInfo />,
    },
    // ----------------------------------------------------------------
    // Global
    error: {
        component: <ErrorPage />,
    },
    // ----------------------------------------------------------------
};

export const {
    heroesApp,
    heroesHome,
    heroesRoute,
    search,
    heroInfo,
    marvel,
    dc,
    login,
    error,
} = routingPath;
