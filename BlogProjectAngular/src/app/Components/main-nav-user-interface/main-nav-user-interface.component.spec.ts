import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavUserInterfaceComponent } from './main-nav-user-interface.component';

describe('MainNavUserInterfaceComponent', () => {
  let component: MainNavUserInterfaceComponent;
  let fixture: ComponentFixture<MainNavUserInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavUserInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavUserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
