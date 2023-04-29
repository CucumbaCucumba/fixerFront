import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionsSideComponent } from './professions-side.component';

describe('ProfessionsSideComponent', () => {
  let component: ProfessionsSideComponent;
  let fixture: ComponentFixture<ProfessionsSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionsSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
