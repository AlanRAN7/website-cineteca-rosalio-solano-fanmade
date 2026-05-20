import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MovieModel } from "../../shared/models/movie.model";
import { moviesData } from "../../shared/models/movie_fake.database";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    constructor() { }

    getMovies(): Observable<MovieModel[]> {
        return of(moviesData);
    }

    /**
     * @param id
     */

    getMovieById(id: number): Observable<MovieModel | undefined> {
        const movie = moviesData.find(movie => movie.id === id);
        return of(movie);
    }
}