import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { routingPath } from "src/router/paths/index";

const { heroesApp, marvel, dc, error, login } = routingPath;

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={heroesApp.path}
            element={heroesApp.component}
            errorElement={error.component}
        >
            <Route path={marvel.path} element={marvel.component} />
            <Route path={dc.path} element={dc.component} />
            <Route path={login.path} element={login.component} />
        </Route>
    )
);
