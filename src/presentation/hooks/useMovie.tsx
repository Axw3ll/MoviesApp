import {useEffect, useState} from 'react';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entiti';
import {Cast} from '../../core/entities/cast.entity';
import {getMovieCastUseCases} from '../../core/use-cases/movie/get-cast.use-case';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = getMovieCastUseCases(movieDBFetcher, movieId);
    const [fullMovie, castResponse] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(castResponse);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
