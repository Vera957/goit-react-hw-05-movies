//reviews in moviedetails

import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { reviewsDataGet } from "components/common/Common";
import "style/style.css";

export const Reviews = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    const { movieId } = useParams();

    const [rewiew, setrewiew] = useState(null);

    useEffect(() => {
        reviewsDataGet(movieId).then(res => setrewiew(res.data.results))
    }, [movieId]);
    if (!rewiew) return;

    return (<div>
        <Link to={backLinkHref} state={{ from: location }}>back</Link>

        {(!rewiew || rewiew.length === 0) && (<p>no reviews</p>)}
        {rewiew.map(({ author, content }) =>
            <li key={author}>
                <h4>{author}</h4>
                <p>{content}</p>
            </li>
        )}

    </div>)
}

export default Reviews;