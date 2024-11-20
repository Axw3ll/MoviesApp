import { HttpAdapter } from '../../../config/adapters/https/http.adapters';
import { UpComingMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entiti';


export const UpComingMoviesUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const UpComingMovies = await fetcher.get<UpComingMoviesResponse>('/upcoming');
        return UpComingMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        throw new Error('Error inesperado: ' + error);
    }
};
