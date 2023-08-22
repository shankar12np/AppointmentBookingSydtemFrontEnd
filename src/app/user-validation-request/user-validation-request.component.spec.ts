import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidationRequestComponent } from './user-validation-request.component';

describe('UserValidationRequestComponent', () => {
  let component: UserValidationRequestComponent;
  let fixture: ComponentFixture<UserValidationRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserValidationRequestComponent]
    });
    fixture = TestBed.createComponent(UserValidationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
