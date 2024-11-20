import { HttpAdapter } from '../../../config/adapters/https/http.adapters';
import { PopularMoviesDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entiti';
interface Options {
    page?: number
    limit?: number
}


export const MoviesPopularUseCases = async (fetcher:HttpAdapter, options?:Options):Promise<Movie[]> => {
    try {
        const PopularMovies = await fetcher.get<PopularMoviesDBResponse>('/popular',{
            params:{
                page: options?.page ?? 1,
            },
        });
        return PopularMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        throw new Error('Error inesperado: ' + error);
    }
};
