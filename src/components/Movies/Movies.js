//search page

import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchDataGet } from "components/common/Common";
import { Ul, LinkStyled, Input, Button, NavLinkStyledMini } from "style/ComponentsStyled";


export const Movies = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const [searchParams, setSearchParams] = useSearchParams();
    const [queryDataResponse, setqueryDataResponse] = useState(null);


    const query = searchParams.get('name') ?? '';

    const setSearch = (val) => {
        setSearchParams(val === '' ? {} : { name: val })
    }

    const search = async (e) => {
        e.preventDefault();
        searchDataGet(query).then(res =>
            setqueryDataResponse(res.data.results)
        )
    }

    useEffect(() => {
        if (query)
            searchDataGet(searchParams.get('name') ?? '').then(res =>
                setqueryDataResponse(res.data.results)
            )
    }, [searchParams, query])



    return (<>
        <NavLinkStyledMini to={backLinkHref}>back</NavLinkStyledMini>
        <form onSubmit={search}>
            <Input
                type='input'
                name='name'
                value={query ?? ''}
                onChange={e => setSearch(e.target.value)}
            >
            </Input>

            <Button >Search</Button>
        </form>
        <Ul>
            {queryDataResponse && (
                queryDataResponse.map(({ title, poster_path, release_date, id }) =>
                    <LinkStyled key={id}>
                        <Link to={`/movies/${id}`} key={id} state={{ from: location }} >
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                            <h3>{title}</h3>
                            <p>{release_date}</p>
                        </Link>
                    </LinkStyled>)
            )}
        </Ul>
    </>)
}

export default Movies;