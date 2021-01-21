import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

  }

  public getTvPopular(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=12d5adbd48868887ee10cd978312d4be&language=en-US&page=1');
  }
  public getMovieFirst(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=12d5adbd48868887ee10cd978312d4be&language=en-US&page=1');
  }

  public getMoviesTop10(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=12d5adbd48868887ee10cd978312d4be&language=en-US&page=1');
  }

}
