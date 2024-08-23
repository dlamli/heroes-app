import { Route, Routes } from "react-router-dom";
import { heroesRoute, login } from "src/router/paths";
import { PrivateRoute } from "../PrivateRoute";
import { HeroesRoutes } from "src/heroes";
import { PublicRoute } from "../PublicRoute";
import { Login } from "src/login/components/Login/Login";

export const LoginRouting = () => {
    return (
        <>
            <Routes>

                <Route
                    path={login.path}
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path={heroesRoute.path}
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />

                {/* <Route path={login.path} element={login.component} /> */}

                {/* <Route
                    path={heroesRoute.path}
                    element={heroesRoute.component}
                /> */}
            </Routes>
        </>
    );
};
