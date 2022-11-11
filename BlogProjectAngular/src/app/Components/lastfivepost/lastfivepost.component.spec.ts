import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfivepostComponent } from './lastfivepost.component';

describe('LastfivepostComponent', () => {
  let component: LastfivepostComponent;
  let fixture: ComponentFixture<LastfivepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastfivepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastfivepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
