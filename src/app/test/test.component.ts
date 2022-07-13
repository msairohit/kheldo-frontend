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
    this.httpService.get("http://localhost:8080/test").subscribe(
      data => {
        alert(JSON.stringify(data));
      }, error => {
        console.error(error);
      }
    )
  }

}
