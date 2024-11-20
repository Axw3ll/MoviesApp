import { HttpAdapter } from '../../../config/adapters/https/http.adapters';
import { NowPlayingResponses } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entiti';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
try {
    const nowPlaying = await fetcher.get<NowPlayingResponses>('/now_playing');
    return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
} catch (error) {
}
};
