import {Component, OnInit} from '@angular/core';
import {ExerciciosService} from './services/exercicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'getpoc';
  constructor(private srv: ExerciciosService) {
  }
  ngOnInit(): void {
    this.srv.get().subscribe(r => console.log(r));
  }
}
