import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesFavoriteRoutingModule } from './movies-favorite-routing.module';
import { MoviesFavoriteComponent } from './movies-favorite.component';


@NgModule({
  declarations: [MoviesFavoriteComponent],
  imports: [
    CommonModule,
    MoviesFavoriteRoutingModule
  ]
})
export class MoviesFavoriteModule { }
