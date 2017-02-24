import {HomeComponent} from './home/home.component';
import {GamePage1Component} from './game-page1/game-page1.component';
import {StudentDetailsComponent} from './student-details/student-details.component';

export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "game-page1", component: GamePage1Component},
    { path: "student-details", component: StudentDetailsComponent}
];

export const AppComponents: any = [
    HomeComponent,
    GamePage1Component,
    StudentDetailsComponent
];