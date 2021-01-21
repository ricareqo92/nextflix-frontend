import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MovieReducer } from './reducers/movie.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
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
