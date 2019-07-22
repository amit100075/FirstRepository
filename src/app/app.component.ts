import { Component } from '@angular/core';
import {HttpClient, HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intercepter';
  constructor(private http: HttpClient) {}

  m1() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
      console.log(res);
    });
  }
  m2() {
    this.http.get('https://jsonplaceholder.typicode.com/users12').subscribe((res) => {
      console.log(res);
    });
  }
}
