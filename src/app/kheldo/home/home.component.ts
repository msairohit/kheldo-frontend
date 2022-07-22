import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any = [];//TODO: Add and use game class instead of any type.

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get("http://localhost:8080/Games/getAllGames").subscribe(//TODO: Place all urls in single file with base url configured.
      (data:any) => {
        this.data = data.response;
      }, error => {
        alert(JSON.stringify(error));
        console.error(error);
      }
    )
  }

}
