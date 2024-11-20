import { THE_MOVIE_DB_API_KEY } from '@env';
import { axiosAdapter } from './https/axios.adapter';


export const movieDBFetcher = new axiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:THE_MOVIE_DB_API_KEY ?? 'no key',
        language:'es',
    },
});
