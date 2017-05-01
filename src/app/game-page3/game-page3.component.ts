import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page3',
  templateUrl: './game-page3.component.html',
  styleUrls: ['./style.scss']
})


export class GamePage3Component implements OnInit {

  constructor(private router: Router) { }

  navigateH() {
    this.router.navigate([""])
  }

  navigateA() {
    this.router.navigate(["game-page1"])
  }

  navigateB() {
    this.router.navigate(["game-page2"])
  }

  navigateSD() {
    this.router.navigate(["student-details"])
  }

  ngOnInit() {
  }
  

}


