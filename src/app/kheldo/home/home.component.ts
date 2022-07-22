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
      '1001',
      'Master Quiz',
      'A perfect place show up your knowledge and quickness',
      20,
      48,
      4.5,
      'quiz',
      '1001.jpg'
    ),
    new Game(
      '1002',
      'Monopoly',
      'Bring your master mind here to grab all market, Will you beat the market',
      6,
      720,
      4.8,
      'monopoly',
      '1002.jpg'
    ),
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
        this.gameData = data.response;
      },
      (error) => {
        alert(JSON.stringify(error));
        console.error(error);
      }
    );
  }
}
