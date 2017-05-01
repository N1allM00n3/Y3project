import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private router: Router,
    //private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
    ) { }

  ngOnInit() {

    //this.authenticationService.logout();

    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  navH() {
    this.router.navigate([""])
  }

  navA() {
    this.router.navigate(["game-page1"])
  }

  navSD() {
    this.router.navigate(["student-details"])
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        )
  }

}
