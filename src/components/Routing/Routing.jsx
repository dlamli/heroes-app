import { Route, Routes } from "react-router-dom";
import { routingPath } from "src/router/paths/index";

// const { marvel, dc, login } = routingPath;

export const Routing = () => {
    return (
        <Routes>
            <Route
                path={routingPath.login.path}
                element={routingPath.login.component}
            />
            <Route
                path={routingPath.dc.path}
                element={routingPath.dc.component}
            />
            <Route
                path={routingPath.marvel.path}
                element={routingPath.marvel.component}
            />
        </Routes>
    );
};
