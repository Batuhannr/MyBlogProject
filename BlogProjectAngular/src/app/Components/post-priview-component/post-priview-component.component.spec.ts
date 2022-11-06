import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPriviewComponentComponent } from './post-priview-component.component';

describe('PostPriviewComponentComponent', () => {
  let component: PostPriviewComponentComponent;
  let fixture: ComponentFixture<PostPriviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPriviewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPriviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
