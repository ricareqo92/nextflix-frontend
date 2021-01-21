import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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
        this. movie =res.results[0];
        this. moviePop = res
        document.getElementById('banner').style.backgroundImage = 'url("https://image.tmdb.org/t/p/w300_and_h450_bestv2' + this.movie.poster_path + '")';
        console.log("res: ", this. movie, this. moviePop);
  
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
