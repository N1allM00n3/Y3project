import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  navigateH() {
    this.router.navigate([""])
  }

  navigateA() {
    this.router.navigate(["game-page1"])
  }

  ngOnInit() {
  }

}
