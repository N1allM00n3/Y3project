/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamePage2Component } from './game-page2.component';

describe('GamePage2Component', () => {
  let component: GamePage2Component;
  let fixture: ComponentFixture<GamePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
