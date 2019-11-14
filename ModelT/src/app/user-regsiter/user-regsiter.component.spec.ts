import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegsiterComponent } from './user-regsiter.component';

describe('UserRegsiterComponent', () => {
  let component: UserRegsiterComponent;
  let fixture: ComponentFixture<UserRegsiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegsiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
