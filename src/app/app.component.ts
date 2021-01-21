import { Component } from '@angular/core';
import { Store, createAction } from '@ngrx/store';
import { Movie } from './interfaces/movie';
import { CREATE_LIST, CreateAction } from './actions/movie.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nextflix-frontend';

  constructor(private store: Store) {

    let movies = JSON.parse(localStorage.getItem('movies'));

    console.log(movies);
    if ( movies !== null ) {
      console.log("entrooo");
      const movies = JSON.parse(localStorage.getItem('movies'));
      const action = new CreateAction(movies);
      this.store.dispatch( action );
      
    } else {
      const movies: Movie[] = [];
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }
}
