import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MovieReducer } from './reducers/movie.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ movie: MovieReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
