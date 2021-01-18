import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit() {

    this._movieService.getTvPopular()
      .subscribe(
        res => {
          console.log("res: ", res);
      },
      err => {

      });
  }

}
