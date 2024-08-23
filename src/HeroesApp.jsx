import { AuthProvider } from "src/auth";
import { LoginRouting } from "./login/routes/LoginRouting/LoginRouting";

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <LoginRouting />
            </AuthProvider>
        </>
    );
};
