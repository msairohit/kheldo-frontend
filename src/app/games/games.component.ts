import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../http.service';
import { Game } from '../kheldo/Objects';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

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

  constructor(private httpService: HttpService, private title: Title) {
    this.title.setTitle("All Games | Kheldo");
  }

  ngOnInit(): void {
    this.httpService.get('http://localhost:8080/Games/getAllGames').subscribe(
      //TODO: Place all urls in single file with base url configured.
      (data: any) => {
        data.response.forEach((element: Game) => {
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
