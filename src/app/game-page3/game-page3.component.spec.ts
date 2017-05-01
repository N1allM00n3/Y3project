/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamePage3Component } from './game-page3.component';

describe('GamePage3Component', () => {
  let component: GamePage3Component;
  let fixture: ComponentFixture<GamePage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
