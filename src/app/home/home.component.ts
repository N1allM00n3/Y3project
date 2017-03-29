import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  navigateA() {
    this.router.navigate(["game-page1"])
  }

  navigateSD() {
    this.router.navigate(["student-details"])
  }

  navigateL() {
    this.router.navigate(["login"])
  }

  ngOnInit() {
  }

}
