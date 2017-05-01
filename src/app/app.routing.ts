import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamePage1Component } from './game-page1/game-page1.component';
import { GamePage2Component } from './game-page2/game-page2.component';
import { GamePage3Component } from './game-page3/game-page3.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
//import { LoginComponent } from './userReg/login/login.component';
//import { RegisterComponent } from './userReg/register/register.component';
//import { AuthGuard } from './userReg/_guards/index';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "game-page1", component: GamePage1Component},
    { path: "game-page2", component: GamePage2Component},
    { path: "game-page3", component: GamePage3Component},
    { path: "student-details", component: StudentDetailsComponent}
    
    //{ path: "userReg", component: RegisterComponent},
    //{ path: "register", component: RegisterComponent},
    //{ path: "login", component: LoginComponent }
];

export const AppComponents: any = [
    HomeComponent,
    GamePage1Component,
    GamePage2Component,
    GamePage3Component,
    StudentDetailsComponent
    //LoginComponent,
    //RegisterComponent
];

export const routing = RouterModule.forRoot(appRoutes);
