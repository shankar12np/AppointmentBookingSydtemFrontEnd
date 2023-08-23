import {Component, Input, OnInit} from '@angular/core';
import {CreateReviewsService} from "../service/create-reviews.service";

@Component({
  selector: 'app-like-count',
  templateUrl: './like-count.component.html',
  styleUrls: ['./like-count.component.css']
})
export class LikeCountComponent {
  // Input property to receive the initial like count
  @Input() likeCount: number = 0;
  @Input() dislikeCount: number = 0;
  @Input() reviewId!: number;

  constructor(public reviewsService : CreateReviewsService) {
  }
  // Method to increment the like count
  incrementLikeCount() {
    if (this.reviewId) {
      this.reviewsService.likeReview(this.reviewId).subscribe(() => {
        this.likeCount++;
      });
    }
    this.likeCount++;
  }

  // Method to decrement the like count
  decrementLikeCount() {
    if (this.reviewId) {
      this.reviewsService.dislikeReview(this.reviewId).subscribe(() => {
        this.dislikeCount++;
      });
    }
     this.likeCount--;
  }

}
