import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlerDialogComponent } from './my-aler-dialog.component';

describe('MyAlerDialogComponent', () => {
  let component: MyAlerDialogComponent;
  let fixture: ComponentFixture<MyAlerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAlerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAlerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
