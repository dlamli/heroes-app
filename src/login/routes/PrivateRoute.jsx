import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "src/auth";
import { login } from "src/router/paths";

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    console.log(location)
    const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);

    return logged ? children : <Navigate to={login.path} />;
};
