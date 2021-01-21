import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _movieService: MovieService) { }
  movie: any;
  moviePop: any;

  ngOnInit() {
    this.getMovieFirst();
  }
  getMovieFirst(){
  this._movieService.getMovieFirst()
  .subscribe(
    res => {

      this. movie =res.results[0];
      this. moviePop = res
      document.getElementById('banner').style.backgroundImage = 'url("https://image.tmdb.org/t/p/w300_and_h450_bestv2' + this.movie.poster_path + '")';
      console.log("res: ", this. movie, this. moviePop);

  },
  err => {

  });
}
}
