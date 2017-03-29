//import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { GamePage1Component} from './game-page1/game-page1.component';
import { StudentDetailsComponent} from './student-details/student-details.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "game-page1", component: GamePage1Component},
    { path: "student-details", component: StudentDetailsComponent},
    { path: "login", component: LoginComponent}
    //{ path: 'register', component: RegisterComponent }
];

export const AppComponents: any = [
    HomeComponent,
    GamePage1Component,
    StudentDetailsComponent,
    LoginComponent
];
