import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  testSpringBootApp() {
    this.httpService.testSpringBootApp();
  }

  testNodeApp() {
    this.httpService.testNodeApp();
  }

  getAllGames() {
    this.httpService.getAllGames();
  }

}
