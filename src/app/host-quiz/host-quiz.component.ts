import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-host-quiz',
  templateUrl: './host-quiz.component.html',
  styleUrls: ['./host-quiz.component.scss']
})
export class HostQuizComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle("Host Quiz | Kheldo");
  }

  ngOnInit(): void {
  }

}
