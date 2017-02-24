import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page1',
  templateUrl: './game-page1.component.html',
  styleUrls: ['./game-page1.component.css']
})
export class GamePage1Component implements OnInit {

  constructor(private router: Router) { }

  navigateH() {
    this.router.navigate([""])
  }

  navigateSD() {
    this.router.navigate(["student-details"])
  }

  ngOnInit() {
  }

}
