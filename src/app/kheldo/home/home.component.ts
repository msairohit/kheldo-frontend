import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Game } from '../Objects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gameData: Game[] = [
    new Game(
      '1003',
      'Ashta-Chamma',
      'Ancient indian game that threaten you with four sea shells',
      6,
      720,
      4.8,
      'ashta-chamma',
      '1003.jpg'
    ),
  ];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.get('http://localhost:8080/Games/getAllGames').subscribe(
      //TODO: Place all urls in single file with base url configured.
      (data: any) => {
        data.response.forEach((element : Game) => {
          this.gameData.push(element);
        });
      },
      (error) => {
        alert(JSON.stringify(error));
        console.error(error);
      }
    );
  }
}
