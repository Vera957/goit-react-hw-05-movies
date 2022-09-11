//MovieDetails

import { movieDataGet } from "components/common/Common";
import { Outlet, useLocation, useParams, } from "react-router-dom";
import { useState, useEffect } from "react";
import { H2, MovieDetailsS, MiniContainer, NavLinkStyledMini, LinkContainer } from "style/ComponentsStyled";
export const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const [info, setinfo] = useState(null)
    const { movieId } = useParams();

    useEffect(() => {
        movieDataGet(movieId).then(e => setinfo(e.data));
    }, [movieId])

    return (<MovieDetailsS>
        {info !== null && (<div>
            <H2>{info.title}</H2>
            <LinkContainer>
                <NavLinkStyledMini to={backLinkHref}>Back</NavLinkStyledMini>
                <NavLinkStyledMini to={`/movies/${movieId}/cast`} state={{ from: location }} >Cast</NavLinkStyledMini>
                <NavLinkStyledMini to={`/movies/${movieId}/reviews`} state={{ from: location }}>Reviews</NavLinkStyledMini>
            </LinkContainer>
            <MiniContainer>
                <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt={info.title} grid-area='img'></img>
                <Outlet grid-area="outlet" />
            </MiniContainer>
        </div>)}
    </MovieDetailsS>)
}

export default MovieDetails;