//actors in moviedetails

import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { castDataGet } from '../common/Common';
import { RewiewStyled } from 'style/ComponentsStyled'


export const Cast = () => {
    const location = useLocation();
    location.state = { from: location }

    const { movieId } = useParams();
    const [castData, setcastData] = useState(null);


    useEffect(() => {
        castDataGet(movieId).then(e => setcastData(e.data))

    }, [movieId]);

    if (castData === null) return;

    const { cast } = castData;
    

    return (<RewiewStyled>
        {/*<Link to={backLinkHref} state={{ from: location }}>back</Link>*/}
        <h3>Cast</h3>
        <ul>{cast.map(e => <li key={e.name}>{e.name}</li>)}</ul>
    </RewiewStyled>)

}

export default Cast;