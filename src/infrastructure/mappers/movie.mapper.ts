import { FullMovie, Movie } from "../../core/entities/movie.entiti";
import type { MovieByIDResult, Result } from "../interfaces/movie-db.responses";


export class MovieMapper {
    static fromMovieDBResultToEntity (result: Result): Movie {
        return{
            id: result.id,
            title: result.title,
            descripcion: result.overview,
            relaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster:'https://image.tmdb.org/t/p/w500' + result.poster_path,
            backdrop:'https://image.tmdb.org/t/p/w500' + result.backdrop_path,
        };
    }

    static fromMovieDBIdToEntity (result:MovieByIDResult):FullMovie{
        return{
            id: result.id,
            title: result.title,
            descripcion: result.overview,
            relaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster:'https://image.tmdb.org/t/p/w500' + result.poster_path,
            backdrop:'https://image.tmdb.org/t/p/w500' + result.backdrop_path,
            generes: result.genres.map(genre => genre.name),
            duration: result.runtime,
            budget: result.budget,
            originalTitle: result.original_title,
            productCompanies: result.production_companies.map(companies => companies.name),
        };
    }
}

