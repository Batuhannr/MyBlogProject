import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendpostComponent } from './recommendpost.component';

describe('RecommendpostComponent', () => {
  let component: RecommendpostComponent;
  let fixture: ComponentFixture<RecommendpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
