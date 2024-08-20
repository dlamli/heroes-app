import { Route, Routes } from "react-router-dom";
import { dc, login, marvel } from "src/router/paths";

export const Routing = () => {
    return (
        <Routes>
            <Route path={login.path} element={login.component} />
            <Route path={dc.path} element={dc.component} />
            <Route path={marvel.path} element={marvel.component} />
        </Routes>
    );
};
