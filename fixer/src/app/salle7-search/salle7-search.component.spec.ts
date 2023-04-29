import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salle7SearchComponent } from './salle7-search.component';

describe('Salle7SearchComponent', () => {
  let component: Salle7SearchComponent;
  let fixture: ComponentFixture<Salle7SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Salle7SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salle7SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
