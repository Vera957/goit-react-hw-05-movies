//popular movies
import { trending } from "components/common/Common";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { H2, Ul, LinkStyled } from 'style/ComponentsStyled';

//import Movie from "components/Movie/Movie";

export const Home = () => {

    const [popularMovies, setpopularMovies] = useState([]);
    const location = useLocation();


    useEffect(() => {
        trending().then(res => setpopularMovies(res.data.results));
    }, []);


    return (<>
        <H2>Popular Movies</H2>

        <Ul>
            {popularMovies.length > 0 && popularMovies.map(({ id, poster_path, title, release_date }) => <LinkStyled key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }} >
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <h3>{title}</h3>
                    <p>{release_date}</p>
                </Link></LinkStyled>)}
        </Ul>

    </>)
}

export default Home;


