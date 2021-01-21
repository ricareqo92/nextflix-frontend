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
  imgurl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

  ngOnInit() {
    this.getMovieFirst();
  }
  search(e){
    console.log("the event", e)
  }
  getMovieFirst(){
  this._movieService.getMovieFirst()
  .subscribe(
    res => {
      this. movie = res.results[0];
      this. moviePop = res

      console.log("res: ", this. movie);

  },
  err => {

  });
}

getMovie(){

}

}
