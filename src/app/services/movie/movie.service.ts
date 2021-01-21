import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = global.URL;
  }

  public getTvPopular(): Observable<any> {
    return this.http.get(`${this.URL}tv/popular?api_key=12d5adbd48868887ee10cd978312d4be&language=en-US&page=1`);
  }

  public getTrending(): Observable<any> {
    return this.http.get(`${this.URL}trending/all/day?api_key=12d5adbd48868887ee10cd978312d4be`)
  }

  public getTopRated(): Observable<any> {
    return this.http.get(`${this.URL}movie/top_rated?api_key=12d5adbd48868887ee10cd978312d4be&language=en-US&page=1`)
  }

  public getMovieDetail(movieId: Number): Observable<any> {
    return this.http.get(`${this.URL}movie/${movieId}?api_key=12d5adbd48868887ee10cd978312d4be&language=en-US`)
  }


}
