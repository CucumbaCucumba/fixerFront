import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salle7ListComponent } from './salle7-list.component';

describe('Salle7ListComponent', () => {
  let component: Salle7ListComponent;
  let fixture: ComponentFixture<Salle7ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Salle7ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salle7ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
