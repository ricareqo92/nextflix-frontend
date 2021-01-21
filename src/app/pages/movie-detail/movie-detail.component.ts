import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddAction, DeleteAction } from 'src/app/actions/movie.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  baseUrl: String;
  movie: any;

  constructor(
    private _movieService: MovieService,
    private _route: ActivatedRoute,
    private store: Store
    ) {
      this.baseUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
    }

  ngOnInit() {

    this.store.subscribe(state => {
      console.log("state: ", state);
    })
    // Sacar el id del user de la url
    this._route.params.subscribe(
      params => {
        let movieId = +params['id'];

        this._movieService.getMovieDetail(movieId)
          .subscribe(
            res => {
              console.log(res);
              this.movie = res;
              this.baseUrl += this.movie.poster_path;
            },
            err => {
              console.log(err);
            }
          )
      }
    )
  }

  addFavorite() {
    console.log("movie: ", this.movie);
    let action = new AddAction(this.movie);
    this.store.dispatch(action);
    let movies = JSON.parse(localStorage.getItem('movies'));

    console.log("movies: ", movies);
    movies.push(this.movie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  viewList() {
    
  }

}
