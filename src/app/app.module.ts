import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { GamePage1Component } from './game-page1/game-page1.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

import {ChessBoardComponent} from "./chessboard/chessboardcomponent";
import {ChessEngineAPI} from "./engine/chessboardUI";
import {FieldComponent} from "./field/fieldcomponent";
import {RowComponent} from "./row/rowcomponent";
import ChessboardUI = ChessEngineAPI.ChessboardUI;
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';
//import { RegisterComponent } from './register/index';
import { AuthenticationService, UserService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    //AlertComponent,
    HomeComponent,
    GamePage1Component,
    StudentDetailsComponent,
    ChessBoardComponent,
    RowComponent,
    FieldComponent,
    LoginComponent
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    { provide: ChessBoardComponent,   useClass:    ChessBoardComponent },
    { provide: ChessboardUI,   useClass:    ChessboardUI },
    { provide: FieldComponent,   useClass:    FieldComponent },
    { provide: RowComponent,   useClass:    RowComponent },
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
