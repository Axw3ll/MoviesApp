import { useState,useEffect } from 'react'
import { Movie } from '../../core/entities/movie.entiti';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

let popularPage = 1;
export const useMovies = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [nowPlaying,setNowPlaying] = useState<Movie[]>([]);
    const [popular,setPopular] = useState<Movie[]>([]);
    const [topRated,setTopRated] = useState<Movie[]>([]);
    const [upComing,setUpComing] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingPromise =  UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise =  UseCases.MoviesPopularUseCases(movieDBFetcher);
        const topRatedPromise =  UseCases.TopRatedMoviesUseCase(movieDBFetcher);
        const upComingPromise =  UseCases.UpComingMoviesUseCase(movieDBFetcher);

        //Ejecuta todas las promises de forma simultenea
        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upComingMovies,

        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise,
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpComing(upComingMovies);

        //Termina la carga de los datos.
        setIsLoading(false);
    };
    return{
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upComing,

        //Metodos

        PopularNextPage: async () => {
            popularPage++;
            const popularMovies = await UseCases.MoviesPopularUseCases(movieDBFetcher,{page:popularPage });
            setPopular(prev => [...prev,...popularMovies]);
        },
  };
};

