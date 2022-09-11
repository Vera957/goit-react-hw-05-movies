//actors in moviedetails

import { Link, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { castDataGet } from '../common/Common';

export const Cast = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const { movieId } = useParams();
    const [castData, setcastData] = useState(null);

    useEffect(() => {
        castDataGet(movieId).then(e => setcastData(e.data))

    }, [movieId]);

    if (castData === null) return;

    const { cast } = castData;
    

    return (<div>
        <Link to={backLinkHref} state={{ from: location }}>back</Link>
        <h3>Cast</h3>
        <ul>{cast.map(e => <li key={e.name}>{e.name}</li>)}</ul>
    </div>)

}

export default Cast;