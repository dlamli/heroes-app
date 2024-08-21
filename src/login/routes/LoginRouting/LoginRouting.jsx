import { Route, Routes } from "react-router-dom";
import { heroesRoute, login } from "src/router/paths";

export const LoginRouting = () => {
    return (
        <>
            <Routes>
                <Route path={login.path} element={login.component} />
                <Route path={heroesRoute.path} element={heroesRoute.component} />
            </Routes>
        </>
    );
};
