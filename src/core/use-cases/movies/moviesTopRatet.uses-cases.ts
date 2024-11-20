import { HttpAdapter } from '../../../config/adapters/https/http.adapters';
import { TopRatedMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entiti';

export const TopRatedMoviesUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> =>{
    try {
        const TopRatedMovies = await fetcher.get<TopRatedMoviesResponse>('/top_rated');
        return TopRatedMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        throw new Error('Error inesperado: ' + error);
    }
};
