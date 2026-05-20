import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MovieComponent } from './features/movie/movie.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "pelicula/:id",
        component: MovieComponent
    }
];
