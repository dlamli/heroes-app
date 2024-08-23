import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { dc, heroInfo, marvel, search } from "src/router/paths";

export const Routing = () => {
    return (
        <Container>
            <Routes>
                <Route path={dc.path} element={dc.component} />
                <Route path={marvel.path} element={marvel.component} />

                <Route path={search.path} element={search.component} />
                <Route path={heroInfo.path} element={heroInfo.component}>
                    <Route path=":heroId" element={heroInfo.component} />
                </Route>

            </Routes>
        </Container>
    );
};
