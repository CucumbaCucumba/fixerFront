import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenAdminComponent } from './main-screen-admin.component';

describe('MainScreenAdminComponent', () => {
  let component: MainScreenAdminComponent;
  let fixture: ComponentFixture<MainScreenAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
