import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
}, {
  path: 'movie-detail/:id',
  loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule)
},
{
  path: 'movies-favorite',
  loadChildren: () => import('./pages/movies-favorite/movies-favorite.module').then(m => m.MoviesFavoriteModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
