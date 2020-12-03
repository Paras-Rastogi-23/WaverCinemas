import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component:HomeComponent},
  { path:'bookings' ,component:MyBookingComponent},
  { path:'bookMovie',component:BookMovieComponent},
  { path:'authentication',component:AuthenticationComponent},
  { path:'**',component : HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
