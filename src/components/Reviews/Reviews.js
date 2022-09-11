//reviews in moviedetails

import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { reviewsDataGet } from "components/common/Common";
import "style/style.css";
import { RewiewStyled } from 'style/ComponentsStyled'

export const Reviews = () => {
    const location = useLocation();
    location.state={from: location}

    const { movieId } = useParams();

    const [rewiew, setrewiew] = useState(null);

    useEffect(() => {
        reviewsDataGet(movieId).then(res => setrewiew(res.data.results))
    }, [movieId]);
    if (!rewiew) return;

    return (<RewiewStyled>
        {(!rewiew || rewiew.length === 0) && (<p>no reviews</p>)}
        {rewiew.map(({ author, content }) =>
            <li key={author}>
                <h4>{author}</h4>
                <p>{content}</p>
            </li>
        )}

    </RewiewStyled>)
}

export default Reviews;