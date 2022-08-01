import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private httpService: HttpService, private title: Title) {
    this.title.setTitle("Testing the App title.");//TODO: Change titles for all the pages similarly.
   }

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
