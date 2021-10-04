import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMaterialComponent } from './users-material.component';

describe('UsersMaterialComponent', () => {
  let component: UsersMaterialComponent;
  let fixture: ComponentFixture<UsersMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
