import { Col, Row, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "src/global/hooks";
import { HeroCard } from "src/heroes/components";
import { getHeroesByName } from "src/heroes/helpers";

export const Search = () => {
    const navigate = useNavigate();
    const { search } = useLocation();

    const { q = "" } = queryString.parse(search);
    const heroesFilterByName = getHeroesByName(q);

    const showSearch = q.length === 0;

    const showNoResults = q.length > 0 && heroesFilterByName.length === 0;

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: "",
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText.toLowerCase().trim()}`);
        onResetForm();
    };

    return (
        <>
            <h1>Search Page</h1>
            <Row>
                <Col md={5}>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Search
                        </button>
                    </form>
                </Col>

                <Col md={7}>
                    <h4>Results</h4>
                    {/* <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> */}
                    <div
                        className="alert alert-primary"
                        style={{ display: showSearch ? "" : "none" }}
                    >
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger"
                        style={{ display: showNoResults ? "" : "none" }}
                    >
                        No results found related to{" "}
                        <small className="fw-bold">{q}</small>
                    </div>

                    {heroesFilterByName.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </Col>
            </Row>
        </>
    );
};
