import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookMovieComponent,
    MyBookingComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
