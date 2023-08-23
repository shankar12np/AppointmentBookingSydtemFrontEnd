import {Component, OnInit} from '@angular/core';
import {CreateReviewsService} from "../service/create-reviews.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
reviwes: any [] = [];

  constructor(public reviewsService : CreateReviewsService) {
  }
  ngOnInit(): void {
    this.getAllReviews();

  }

  private getAllReviews() {
    this.reviewsService.getAllReviews()
      .subscribe(reviews => {
        this.reviwes = reviews;
      });
  }
  likeReview(review: any) {
    console.log("Like++ called !")
    // Call the service method to increment the like count on the server
    this.reviewsService.likeReview(review.id).subscribe(() => {
      // Update the local review object's likeCount
      review.likeCount++;
    });
  }

  dislikeReview(review: any) {
    console.log("Dislike++ called ! ")
    // Call the service method to increment the dislike count on the server
    this.reviewsService.dislikeReview(review.id).subscribe(() => {
      // Update the local review object's dislikeCount
      review.dislikeCount++;
    });
  }


  getReviewCount(reviewId: number){
    this.reviewsService.getReviewCount(reviewId).subscribe((count) =>{
     //update local review object's reviewCount
      const review = this.reviwes.find((r) =>r.id === reviewId);
      if (review) {
        review.reviewCount = count;
      }
    })
  }
}
