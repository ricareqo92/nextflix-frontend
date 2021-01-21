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
  movieTvPopular: any;
  movieTop: any;
  imgurl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

  ngOnInit() {
    this.getMovieFirst();
    this.getMoviePopular();
    this.getMovieTop();
  }
  search(e){
    console.log("the event", e)
  }
  getMovieFirst(){
  this._movieService.getTrending()
  .subscribe(
    res => {
      this. movie = res.results[0];
      this. moviePop = res

      console.log("res: ", this. movie);

  },
  err => {

  });
}

getMoviePopular(){
  this._movieService.getTvPopular()
  .subscribe(
    res => {
      this. movieTvPopular = res;
      console.log("Say hi!", res.results)

  },
  err => {

  });

}

getMovieTop(){
  this._movieService.getTopRated()
  .subscribe(
    res => {
      this. movieTop = res;
      console.log("movie", this. movieTop)

  },
  err => {

  });
}
}
