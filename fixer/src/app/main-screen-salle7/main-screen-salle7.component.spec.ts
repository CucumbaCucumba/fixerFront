import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenSalle7Component } from './main-screen-salle7.component';

describe('MainScreenSalle7Component', () => {
  let component: MainScreenSalle7Component;
  let fixture: ComponentFixture<MainScreenSalle7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenSalle7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreenSalle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
