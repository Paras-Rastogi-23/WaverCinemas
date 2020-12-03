import { Component, OnInit } from '@angular/core';
import { Movie } from '../book-movie/movie.model';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
 movies : Movie[]=[
   new Movie(' End Game' , ' 11:30' ,3, "assets/movie/Endgame.jpg"),
   new Movie(' Kingkong' , ' 15:00' ,4, "assets/movie/Kingkong.jpg"),
   new Movie(' Twilight' , ' 18:00' ,4, "assets/movie/Twilight.jpg")
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
