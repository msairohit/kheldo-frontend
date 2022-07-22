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

  hostTheGame(gameName: string, gameId:string) {
    alert("Hosting the game : " + gameName);
    // this.router.navigate(['test']);//TODO: Navigate to appropriate page.
  }

  joinTheGame(gameName: string, gameId:string) {
    alert("Joining the game : " + gameName);
    // this.router.navigate(['test']);//TODO: Navigate to appropriate page.
  }

}
