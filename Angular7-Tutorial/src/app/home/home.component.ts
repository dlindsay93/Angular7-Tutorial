import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:Object;
  h1Style:boolean = false;
  homeTitle: string = "Home";
  betterElephant: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    });

    }
  firstClick(){
    this.data.getUsers();
    this.h1Style = true;
    this.homeTitle = "We can make things better than real"
    }
}
