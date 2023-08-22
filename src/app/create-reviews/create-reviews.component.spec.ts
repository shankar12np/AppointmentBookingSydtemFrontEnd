import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReviewsComponent } from './create-reviews.component';

describe('CreateReviewsComponent', () => {
  let component: CreateReviewsComponent;
  let fixture: ComponentFixture<CreateReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReviewsComponent]
    });
    fixture = TestBed.createComponent(CreateReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
