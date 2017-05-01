import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { GamePage1Component } from './game-page1/game-page1.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

import {ChessBoardComponent} from "./game-page1/chessboard/chessboardcomponent";
import {ChessEngineAPI} from "./game-page1/engine/chessboardUI";
import {FieldComponent} from "./game-page1/field/fieldcomponent";
import {RowComponent} from "./game-page1/row/rowcomponent";
import { GamePage2Component } from './game-page2/game-page2.component';
import { GamePage3Component } from './game-page3/game-page3.component';
import ChessboardUI = ChessEngineAPI.ChessboardUI;

//import { LoginComponent } from './userReg/login/login.component';
//import { AuthGuard } from './userReg/_guards/index';
//import { AlertComponent } from './userReg/_directives/index';
//import { RegisterComponent } from './userReg/register/index';
//import { AuthenticationService, UserService } from './userReg/_services/index';

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
    GamePage2Component,
    GamePage3Component,
    //LoginComponent,
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    { provide: ChessBoardComponent,   useClass:    ChessBoardComponent },
    { provide: ChessboardUI,   useClass:    ChessboardUI },
    { provide: FieldComponent,   useClass:    FieldComponent },
    { provide: RowComponent,   useClass:    RowComponent },
    //AuthGuard,
    //AuthenticationService,
    //UserService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
