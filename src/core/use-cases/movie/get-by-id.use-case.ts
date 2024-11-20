import { HttpAdapter } from "../../../config/adapters/https/http.adapters";
import { MovieByIDResult} from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entiti";

export const getMovieByIdUseCase = async (fetcher:HttpAdapter,movieId:number):Promise<FullMovie> =>{
    try {
        //Fetcher
        const movie = await fetcher.get<MovieByIDResult>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovieDBIdToEntity(movie);
        return fullMovie;
        //Mapeo
        //Return full movie
    } catch (error) {
        throw new Error(`No se logro en contrar una pelicula con el Id: ${movieId}`);
    }
};

