import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/interfaces/movie';
import { DeleteAction } from 'src/app/actions/movie.actions';

@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.css']
})
export class MoviesFavoriteComponent implements OnInit {

  baseUrl: String;
  movies: Movie[];

  constructor(private store: Store<any>) {
    this.baseUrl = 'https://image.tmdb.org/t/p/w300_and_h300_bestv2/';
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.movies = state.movie;
    });
  }

  deleteMovie(movieId: Number) {
    let action = new DeleteAction(movieId);
    this.store.dispatch(action);
  }

}
