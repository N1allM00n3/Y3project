/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamePage1Component } from './game-page1.component';

describe('GamePage1Component', () => {
  let component: GamePage1Component;
  let fixture: ComponentFixture<GamePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
