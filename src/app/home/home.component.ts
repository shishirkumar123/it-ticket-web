import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  tickets: Object;
  public status="text-green";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTickets().subscribe(data => {
      this.tickets = data;
      console.log(this.tickets);
      }
    );
  }

  firstClick() {
    //console.log('clicked');
    this.h1Style = true;
    this.data.firstClick();
  }
}