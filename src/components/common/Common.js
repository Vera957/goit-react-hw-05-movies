import axios from "axios";
//React.lazy() и <Suspense> use!!!! propTypes!!!!!

export const KEY = '18cfbf7ffc39b32aee1cd45e168e74c4';

export const trending = async () => {
    const res = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
        .catch(console.error);
    return res;
}

export const searchDataGet = async (query) => {

    const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        .catch(console.error);
    return res;
}

export const movieDataGet = async (id) => {
    const res = axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
       // .then(resp => console.log(resp.data))
        .catch(console.error);
    return res;
}

export const reviewsDataGet = async (id) => {
    const res = axios(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
        .catch(console.error);
    return res;
}

export const castDataGet = async (id) => {
    const res = axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
        .catch(console.error);
    return res;
}
