import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../app/home/home.component';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.css']
})
export class BookMovieComponent implements OnInit {

  public moviesList =[{ name: 'Avengers Endgame' }, { name: 'Jumanji'}, { name: 'Final Destination' }, {name: 'Forbidden Kingdom'}, { name: 'Titanic'}, { name: 'Twilight'}, { name: 'The Nun'}, { name: 'Kingkong'}]; 
  public timeSchedule = [{time : '10:00'},{time : '11:30'},{time : '12:30'},{time : '13:45'},{time : '15:00'},{time : '16:30'},{time : '18:00'},{time : '19:30'},{time : '21:00'}];
  constructor() { }

  ngOnInit(): void {
    this.getMoviesList();
    this.getTimeList();
  }
  
  getMoviesList(){
    return this.moviesList;
  }
  getTimeList(){
    return this.timeSchedule;
  }

}
