import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string) {
    return this.httpClient.get(url);
  }

  public testSpringBootApp() {
    this.get("http://localhost:8080/test").subscribe(
      data => {
        alert(JSON.stringify(data));
      }, error => {
        console.error(error);
      }
    )
  }

  public testNodeApp() {
    this.get("http://localhost:3000/").subscribe(
      data => {
        alert(JSON.stringify(data));
      }, error => {
        alert(JSON.stringify(error));
        console.error(error);
      }
    )
  }

  public getAllGames() {
    this.get("http://localhost:8080/Games/getAllGames").subscribe(
      data => {
        alert(JSON.stringify(data));
      }, error => {
        alert(JSON.stringify(error));
        console.error(error);
      }
    )
  }
}
