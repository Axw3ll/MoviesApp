import { HttpAdapter } from "../../../config/adapters/https/http.adapters";
import { MovieDBCastingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";

export const getMovieCastUseCases = async (fetcher:HttpAdapter,movieId:number):Promise<Cast> =>{
    try {
        const {cast} = await fetcher.get<MovieDBCastingResponse>(`/${movieId}/credits`);
        const actors = cast.map(actor => CastMapper.fromMovieDBCastToEntity(actor));
        return actors;
    } catch (error) {
        throw new Error (`No se pudieron encontrar actores de la pelicula ${movieId}`);
    }
}