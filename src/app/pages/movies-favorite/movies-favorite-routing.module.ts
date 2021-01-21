import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFavoriteComponent } from './movies-favorite.component';


const routes: Routes = [{
  path: '',
  component: MoviesFavoriteComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesFavoriteRoutingModule { }
