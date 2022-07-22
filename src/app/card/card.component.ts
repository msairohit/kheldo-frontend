import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataFromParent: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.dataFromParent);
  }

  ngAfterViewInit() {
    console.log(this.dataFromParent);
  }

  hostTheGame(gameName: string, gameId) {
    alert("Hosting the game : " + gameName);
    // this.router.navigate(['test']);//TODO: Navigate to appropriate page.
  }

  joinTheGame(gameName: string, gameId) {
    alert("Joining the game : " + gameName);
    // this.router.navigate(['test']);//TODO: Navigate to appropriate page.
  }

}
