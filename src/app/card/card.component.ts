import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../kheldo/Objects';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataFromParent:Game[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('data'+this.dataFromParent);
  }

  ngAfterViewInit() {
    console.log(this.dataFromParent);
  }

  hostTheGame(gameName: string, gameId: string, routePath: String) {
    console.log("Hosting the game : " + gameName);
    this.router.navigate(['games/' + routePath + '/host']);
  }

  joinTheGame(gameName: string, gameId: string, routePath: String) {
    console.log("Joining the game : " + gameName);
    this.router.navigate(['games/' + routePath + '/join']);
  }

  howToPlay(routePath: String) {
    this.router.navigate(['games/' + routePath + '/how-to-play']);
  }

}
