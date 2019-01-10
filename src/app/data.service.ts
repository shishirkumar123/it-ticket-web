import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:8080/api/v1/tickets')
    //return this.http.get('https://reqres.in/api/users')
  }

  getTickets(){
    return this.http.get('http://localhost:8080/api/v1/tickets')
  }

  firstClick() {
    return console.log('clicked- msg from Data Service');
  }
}
