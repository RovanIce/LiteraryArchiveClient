import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Weather } from './weather/weather';
import { Author } from './author/author';
import { Genre } from './genre/genre';

export const routes: Routes = [
    {path: '', component: Home,pathMatch: 'full'},
    {path: 'weather', component: Weather},
    {path: 'city', component: Author},
    {path: 'country', component: Genre}
];