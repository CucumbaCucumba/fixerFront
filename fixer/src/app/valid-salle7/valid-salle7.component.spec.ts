import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidSalle7Component } from './valid-salle7.component';

describe('ValidSalle7Component', () => {
  let component: ValidSalle7Component;
  let fixture: ComponentFixture<ValidSalle7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidSalle7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidSalle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
